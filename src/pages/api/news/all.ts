import {NextApiRequest, NextApiResponse} from "next";
import api from "../../../data/api";
import {NewsItem} from "../../../data/models";

export default async function handler(req: NextApiRequest, res: NextApiResponse<NewsItem[]>) {
    const data = await api.getAll();
    res.json(data);
}
