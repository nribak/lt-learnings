import {NewsLetter, NewsLetterSummary} from "@functions/newsletter/models";
import db from "@libs/dynamo";

export const getAllPosts = async (): Promise<NewsLetterSummary[]> => {
    return await db.getAll();
}

export const getPostById = async ({id}: {id: string}): Promise<NewsLetter|null> => {
    return await db.getById(id);
}

export const createPost = async ({title, details}: {title?: string, details?: string}): Promise<NewsLetter> => {
    return  await db.createNew(title, details);
}

export const deletePost = async ({id}: {id: string}): Promise<boolean> => {
    const status = await db.deleteById(id);
    return status < 400;
}

export const updatePost = async ({id, details, title}: {id: string, title?: string, details: string}): Promise<any> => {
    return await db.updateById(id, title, details);
}

/*
Mapping Template:

{
  "id":"$input.params().path.get('id')",
  "title":$input.json('$.title'),
  "details":$input.json('$.details')
}

 */
