import axios from "axios";

const instance = axios.create({baseURL: 'https://pixabay.com/api/', params: {
        key: '12175339-7048b7105116d7fa1da74220c',
        image_type: 'photo'
    }});

export interface PixabayHit {
    id: number,
    webformatURL: string,
    tags: string
}

export interface PixabayInput {
    q: string,
    category?: string
}

export async function requestImages({q, category}: PixabayInput): Promise<PixabayHit[]> {
    try {
        const response = await instance.get('', {
            params: {q, category}
        });
        return response.data.hits;
    } catch (e) {
        console.log(e);
        return [];
    }
}
