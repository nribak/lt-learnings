import {handlerPath} from "@libs/handler-resolver";

export const getAllPostHandler = {
    handler: `${handlerPath(__dirname)}/handler.getAllPosts`,
    name: 'NewsletterGetAll'
}

export const getPostByIdHandler = {
    handler: `${handlerPath(__dirname)}/handler.getPostById`,
    name: 'NewsletterGetById'
}

export const createPostHandler = {
    handler: `${handlerPath(__dirname)}/handler.createPost`,
    name: 'NewsletterCreate'
}

export const deletePostHandler = {
    handler: `${handlerPath(__dirname)}/handler.deletePost`,
    name: 'NewsletterDelete'
}

export const updatePostHandler = {
    handler: `${handlerPath(__dirname)}/handler.updatePost`,
    name: 'NewsletterUpdate'
}
