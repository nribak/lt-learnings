import NewsPost, { NewsPostModel } from "./NewsPost";
import { NewsLetter, NewsLetterSummary, parseNewsLetterModel, parseSummaryModel } from "./models";

export default class NewsletterRepo {

    async createPost(title?: string, details?: string): Promise<NewsLetter> {
        const now = Date.now();
        const post: NewsPost = {
            title: title ?? '', details: details ?? '',
            createdAt: now, updatedAt: now
        };
        const document = await NewsPostModel.create(post);
        return parseNewsLetterModel(document);
    }


    async getAll(): Promise<NewsLetterSummary[]> {
        const result = await NewsPostModel.find({}, '_id title updatedAt createdAt');
        return result.map(item => parseSummaryModel(item));
    }

    async getById(id: string): Promise<NewsLetter | null> {
        const result = await NewsPostModel.findById(id);
        if (result)
            return parseNewsLetterModel(result);
        else return null;
    }

    async deleteById(id: string): Promise<NewsLetter | null> {
        const doc = await NewsPostModel.findByIdAndDelete(id);
        if (doc)
            return parseNewsLetterModel(doc);
        else return null;
    }

    async updatePost(id: string, title?: string, details?: string): Promise<NewsLetter | null> {
        const now = Date.now();
        const doc = await NewsPostModel.findByIdAndUpdate(id, { title, details, updatedAt: now }, { new: true });
        if (doc)
            return parseNewsLetterModel(doc);
        else return null;
    }
}
