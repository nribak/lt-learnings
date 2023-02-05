import axios from "axios";
import {Post, PostSummary} from "./models";

const instance = axios.create({
    baseURL: 'https://yhn4sqmmcb.execute-api.us-east-1.amazonaws.com/production',
    headers: {
        'x-api-key':process.env.AWS_KEY
    }
});

interface PhotoModel {
    id: string
}

const serverApi = {
    createPost: async (title?: string, details?: string): Promise<Post> => {
        const {data} = await instance.post('/', {title, details});
        return data;
    },
    getAllPosts: async (): Promise<PostSummary[]> => {
        try {
            const {data} = await instance.get('/');
            return data;
        } catch (e: any) {
            console.log(e);
        }
        return [];


    },
    getPostById: async (id: string): Promise<Post|null> => {
        try {
            const {data : posts} = await instance.get(`/${id}`);
            const {data : photos} = await instance.get(`/image/${id}`);
            const photosIds = photos?.map((photo: PhotoModel) => `${process.env.IMAGE_BASE_URL + photo.id}`);
            if(photosIds)
                posts.imageIds = photosIds;
            return posts;
        } catch (e) {
            return null;
        }
    },
    updatePost: async (id: string, title: string, details: string): Promise<Post|null> => {
        try {
            const {data} = await instance.put(`/${id}`, {title, details});
            return data;
        } catch (e) {
            console.log(e);
            return null;
        }
    },
    deletePost: async (id: string): Promise<boolean> => {
        try {
            await instance.delete(`/${id}`);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }
}

export default serverApi;
