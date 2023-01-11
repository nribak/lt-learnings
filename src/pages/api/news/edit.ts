import {NextApiRequest, NextApiResponse} from "next";
import API from "../../../data/api";
import {NewsItem} from "../../../data/models";

export default async function handler(req: NextApiRequest, res: NextApiResponse<NewsItem|null>) {
    const {title, details, id, imageId} = req.body;
    const data = await API.updateById(id, title, details, imageId);
    res.json(data);
}
