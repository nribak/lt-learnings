import NewsPost from "./NewsPost";

// const connection = "redis://default:da29db675ded4c2fb1befa1b5d06e14a@us1-holy-duck-38417.upstash.io:38417";
// const redisKey = '_newsletter';

export default class NewsletterRepo {
    // private client: Redis;
    private data: {[id: string]: NewsPost} = {};
    // constructor() {
        // this.client = new Redis(connection);
    // }

    async createPost(title?: string, details?: string): Promise<NewsPost> {
        const id = Date.now().toString();
        const post: NewsPost = {
            id, title: title ?? '', details: details ??''
        };
        this.data[id] = post;
        return post;
    }


    async getAll(): Promise<NewsPost[]> {
        return Object.values(this.data);
    }

    async getById(id: string): Promise<NewsPost|null> {
        return this.data[id] ?? null;
    }

    async deleteById(id: string): Promise<boolean> {
        return delete this.data[id];
    }

    async updatePost(id: string, title?: string, description?: string): Promise<NewsPost|null> {
        const post = this.data[id] ?? null;
        if(post) {
            if(title)
                post.title = title;
            if(description)
                post.details = description;
        }
        return post;
    }
}
