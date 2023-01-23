import axios from "axios";
import {Post, PostSummary} from "./models";

const instance = axios.create({
    baseURL: '/api'
});

const clientApi = {
    createPost: async (title?: string, details?: string): Promise<Post> => {
        const {data} = await instance.post('create', {title, details});
        return data;
    },
    updatePost: async (id: string, title: string, details: string): Promise<Post|null> => {
        const {data} = await instance.post('update', {id, title, details});
        return data;
    },
    getAllPosts: async (): Promise<PostSummary[]> => {
        console.log('calling api')
        const {data} = await instance.get('list');
        return data;
    }
}

export default clientApi;