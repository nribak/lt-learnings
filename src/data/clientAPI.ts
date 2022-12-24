import axios from "axios";
import {NewsItem} from "./models";

const instance = axios.create({
    baseURL: '/api/news'
});

const clientAPI = {
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
        const {data} = await instance.post('/uploadimage', formData);
        return data;
    }
}

export default clientAPI;
