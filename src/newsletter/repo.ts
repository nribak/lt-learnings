import NewsPost from "./NewsPost";


export default class NewsletterRepo {
    private data: {[id: string]: NewsPost} = {};

    async createPost(title?: string, details?: string): Promise<NewsPost> {
        const now = Date.now();
        const id = now.toString();
        const post: NewsPost = {
            id, title: title ?? '', details: details ?? '',
            createdAt: now, updatedAt: now
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
            post.updatedAt = Date.now();
        }
        return post;
    }
}
