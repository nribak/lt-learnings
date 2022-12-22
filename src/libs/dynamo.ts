import {
    AttributeValue,
    DeleteItemCommand,
    DynamoDBClient,
    GetItemCommand,
    PutItemCommand,
    ScanCommand, UpdateItemCommand
} from "@aws-sdk/client-dynamodb";

import {NewsLetter, NewsLetterSummary} from "@functions/newsletter/models";
import {marshall, unmarshall} from "@aws-sdk/util-dynamodb";


function convertFromRecord<T>(record: Record<string, AttributeValue>): T {
    return unmarshall(record) as T;
}

function convertToRecord<T>(value: T): Record<string, AttributeValue> {
    return marshall(value, {
        removeUndefinedValues: true
    });
}

const client = new DynamoDBClient({region: 'us-east-1' });

const table = 'newsletter';

const db = {
    getAll: async (): Promise<NewsLetterSummary[]> => {
        const data = await client.send(new ScanCommand({
            TableName: table,
            ProjectionExpression: 'id, title, updatedAt, createdAt'
        }));
        return data.Items.map(item => convertFromRecord(item))
    },
    getById: async (id: string): Promise<NewsLetter|null> => {
        const {Item} = await client.send(new GetItemCommand({
            TableName: table,
            Key: {
                id: {S: id}
            }
        }));
        if(Item)
            return convertFromRecord(Item);
        else return null;
    },
    createNew: async (title?: string, details?: string): Promise<NewsLetter> => {
        const now = Date.now();
        const id = now.toString();
        const newsLetter: NewsLetter = {id, title, details, createdAt: now, updatedAt: now};
        await client.send(new PutItemCommand({
            TableName: table,
            Item: convertToRecord(newsLetter)
        }));
        return newsLetter;
    },
    deleteById: async (id: string): Promise<number> => {
        const respond = await client.send(new DeleteItemCommand({
            TableName: table,
            Key: {
                id: {S: id}
            }
        }));
        return respond.$metadata.httpStatusCode
    },
    updateById: async (id: string, title?: string, details?: string, imageId?: string): Promise<NewsLetter|null> => {
        const data = await client.send(new UpdateItemCommand({
            TableName: table,
            ReturnValues: 'ALL_NEW',
            Key: {id: {S: id}},
            UpdateExpression: 'set title = :t, details = :d, updatedAt = :u, imageId = :img',
            ExpressionAttributeValues: {
               ':t': {S: title},
                ':d': {S: details},
                ':u': {N: Date.now().toString()},
                ':img': {S: imageId}
            },
        }));
        return convertFromRecord(data.Attributes);
    }
}

export default db;

