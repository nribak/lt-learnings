import {
    AttributeValue,
    DeleteItemCommand,
    DynamoDBClient,
    GetItemCommand,
    PutItemCommand,
    ScanCommand
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

const client = new DynamoDBClient({region: 'us-east-1'});
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
        const data = await client.send(new GetItemCommand({
            TableName: table,
            Key: {
                id: {S: id}
            }
        }));
        return convertFromRecord(data.Item);
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
    updateById: async (id: string, title?: string, details?: string): Promise<NewsLetter|null> => {
        const {Item} = await client.send(new GetItemCommand({
            TableName: table,
            Key: {
                id: {S: id}
            }
        }));
        const post: NewsLetter = convertFromRecord(Item);
        if(post) {
            if(title)
                post.title = title;
            if(details)
                post.details = details;
            post.updatedAt = Date.now();

            await client.send(new PutItemCommand({
                TableName: table,
                Item: convertToRecord(post)
            }));
            return post;
        }
        return null;
    }
}

export default db;

