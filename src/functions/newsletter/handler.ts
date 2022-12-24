import {NewsLetter, NewsLetterSummary} from "@functions/newsletter/models";
import db from "@libs/dynamo";
import s3Storage, {objectKeyForImage} from "@libs/s3";

export const getAllPosts = async (): Promise<NewsLetterSummary[]> => {
    return await db.getAll();
}

export const getPostById = async ({ id }: { id: string }): Promise<NewsLetter | null> => {
    return await db.getById(id);
}

export const createPost = async ({ title, details }: { title?: string, details?: string }): Promise<NewsLetter> => {
    return await db.createNew(title, details);
}

export const deletePost = async ({ id }: { id: string }): Promise<boolean> => {
    const status = await db.deleteById(id);
    return status < 400;
}

export const updatePost = async ({ id, details, title }: { id: string, title?: string, details?: string }): Promise<any> => {
    return await db.updateById(id, title, details);
}

export const uploadImage = async ({ postId, fileName, fileBody }: { postId: string, fileName: string, fileBody: string }): Promise<number> => {
    const objectKey = await s3Storage.uploadFile(objectKeyForImage(fileName, postId), fileBody);
    return await db.addImage(postId, objectKey);
}

export const deleteImage = async ({imageId}: {imageId: string}): Promise<number> => {
    const objectKey = imageId;// objectKeyForImage(imageId, postId)
    const response = await db.deleteImage(objectKey);
    if(response < 400)
        await s3Storage.deleteFile(objectKey);
    return response;
}

export const getImages = async ({postId}: {postId: string}): Promise<string[]> => {
    return db.getAllImages(postId);
}

/*
Mapping Template:

{
  "id":"$input.params().path.get('id')",
  "title":$input.json('$.title'),
  "details":$input.json('$.details')
}

 */
