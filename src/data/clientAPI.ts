import axios from "axios";
import {NewsItem} from "./models";
import {convertFile} from "../components/utils/helpers";

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
        const fileData = await convertFile(file);
        const {data} = await instance.post('/upload', {postId, name: file?.name, data: fileData});
        return data;
    }
}

export default clientAPI;
