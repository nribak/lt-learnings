import {Document} from "mongoose";
import NewsPost from "./NewsPost";
import {BeAnObject} from "@typegoose/typegoose/lib/types";

export interface NewsLetterSummary {
    id: string,
    title: string,
    updatedAt: number,
    createdAt: number
}

export interface NewsLetter extends NewsLetterSummary {
    details: string
}

export const parseSummaryModel = (doc: Document<string, BeAnObject, NewsPost> & NewsPost): NewsLetterSummary => ({
    id: doc._id!, title: doc.title, updatedAt: doc.updatedAt, createdAt: doc.createdAt
});
export const parseNewsLetterModel = (doc: Document<string, BeAnObject, NewsPost> & NewsPost): NewsLetter => ({
    ...parseSummaryModel(doc), details: doc.details
})
