import axios from "axios";
import {NewsItem} from "./models";

const instance = axios.create({
    baseURL: 'http://localhost:4000/news',
    headers: {Authorization: 'abcd'}
})
const API = {
    async create(): Promise<string> {
        const {data} = await instance.post('/', {});
        return data.id;
    },
    async getAll(): Promise<NewsItem[]> {
        const {data} = await instance.get('/');
        return data;
    },
    async getById(id: string): Promise<NewsItem|null> {
        const {data} = await instance.get(`/${id}`);
        return data;
    },
    async updateById(id: string, title?: string, details?: string): Promise<NewsItem|null> {
        const {data} = await instance.put(`/${id}`, {title, details});
        return data;
    },
    async delete(id: string){
        await instance.delete(`/${id}`);
    }
}

export default API;
