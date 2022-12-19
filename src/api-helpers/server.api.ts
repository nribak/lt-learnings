import axios from "axios";
import {Post, PostSummary} from "./models";

const instance = axios.create({
    baseURL: 'https://yhn4sqmmcb.execute-api.us-east-1.amazonaws.com/production',
    headers: {
        'x-api-key': '020e46c2-864c-46b5-9ca9-db6367317b3c'
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
    },
    getPostById: async (id: string): Promise<Post|null> => {
        try {
            if(id === '1')
                return null;
            const {data} = await instance.get(`/${id}`);
            return data;
        } catch (e) {
            return null;
        }
    }
}

export default serverApi;
