import axios from "axios";
import {DataResponse, NewsItem} from "./models";

const instance = axios.create({
    baseURL: '/api/news'
});

const clientAPI = {
    async getAll(): Promise<DataResponse<NewsItem[]>> {
        const {data} = await instance.get('/all');
        return data;
    },
    async create(): Promise<string> {
        const {data} = await instance.post('/create', {});
        return data.id;
    },
    async update(id: string, title?: string, details?: string): Promise<NewsItem|null> {
        const {data} = await instance.post('/edit', {id, title, details});
        return data;
    },
    async delete(id: string){
        const {data} = await instance.post('/delete', {id});
        return data;
    },
    async appendImage(postId: string, file: File){
        const formData = new FormData();
        formData.append('file', file);
        formData.append('postId', postId)
        const {data} = await instance.post('/images/upload', formData);
        return data;
    },
    async deleteImage(imageId: string, postId: string) {
        const {data} = await instance.post('/images/delete', {imageId, postId});
        return data;
    }
}

export default clientAPI;
