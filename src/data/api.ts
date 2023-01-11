import axios from "axios";
import {NewsItem} from "./models";

interface PostImage {
    id: string
}

const instance = axios.create({
    baseURL: 'https://yhn4sqmmcb.execute-api.us-east-1.amazonaws.com/production',
    headers: {'x-api-key': '020e46c2-864c-46b5-9ca9-db6367317b3c'}
})
const API = {
    async create(): Promise<NewsItem> {
        const now = Date.now();
        const {data} = await instance.post('/', {title: now.toString(), details: ''});
        return data;
    },
    async getAll(): Promise<NewsItem[]> {
        const {data} = await instance.get('/');
        return data;
    },
    async getById(id: string): Promise<NewsItem|null> {
        const {data} = await instance.get<NewsItem>(`/${id}`);
        const {data : images} = await instance.get<PostImage[]>('/image/' + id)
        data.imageIds = images.map(image => image.id);
        return data;
    },
    async updateById(id: string, title?: string, details?: string, image?: string): Promise<NewsItem|null> {
        const {data} = await instance.put(`/${id}`, {title, details, image});
        return data;
    },
    async delete(id: string){
        await instance.delete(`/${id}`);
    },
    async upload(name: string, base64Image: string, postId: string): Promise<NewsItem|null> {
        const payload = {postId, fileName: name, fileBody: base64Image}
        console.log(base64Image.length);
        try {
            const {data} = await instance.post('/image', payload);
            return data;
        } catch (e: any) {
            // console.log(e);
            return null;
        }
    },
    async deleteImage(imageId: string, postId: string): Promise<number> {
        console.log(postId, imageId);
        const {data} = await instance.delete('/image', {
            data: {imageId, postId}
        });
        return data;
    }
}

export default API;
