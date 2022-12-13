import axios from "axios";
import {Post} from "./models";

const instance = axios.create({
    baseURL: '/api'
});

const clientApi = {
    createPost: async (title?: string, details?: string): Promise<Post> => {
        const {data} = await instance.post('create', {title, details});
        return data;
    }
}

export default clientApi;
