import {prop, getModelForClass} from "@typegoose/typegoose";

export default class NewsPost {

    @prop()
    public details!: string;

    @prop()
    public title!: string;

    @prop()
    public updatedAt!: number

    @prop()
    public createdAt!: number
}

export const NewsPostModel = getModelForClass(NewsPost);
