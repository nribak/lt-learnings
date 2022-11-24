import axios from "axios";

const instance = axios.create({
    baseURL: '/api/news'
});

const clientAPI = {
    async create(): Promise<string> {
        const {data} = await instance.post('/create', {});
        return data.id;
    }
}

export default clientAPI;
