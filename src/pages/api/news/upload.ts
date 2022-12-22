import {NextApiRequest, NextApiResponse} from "next";
import API from "../../../data/api";
import {NewsItem} from "../../../data/models";

export default async function handler(req: NextApiRequest, res: NextApiResponse<NewsItem|null>) {
    const {name, data, postId} = req.body;
    console.log(name, postId);
    const response = await API.upload(name, data, postId);
    res.json(response);
}
