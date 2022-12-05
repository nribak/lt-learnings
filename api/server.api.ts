import axios from "axios";
import {Post, PostSummary} from "./models";

const instance = axios.create({
    baseURL: 'http://172.22.220.218:4000/news',
    headers: {
        Authorization: '020e46c2-864c-46b5-9ca9-db6367317b3c'
    }
});

const serverApi = {
    createPost: async (title?: string, details?: string): Promise<Post> => {
        const {data} = await instance.post('/', {title, details});
        return data;
    },
    getAllPosts: async (): Promise<PostSummary[]> => {
        const {data} = await instance.get('/');
        return data;
    }
}

export default serverApi;
