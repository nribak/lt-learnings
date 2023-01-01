import {NextApiRequest, NextApiResponse} from "next";
import {DataResponse, NewsItem} from "../../../data/models";
import api from "../../../data/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse<DataResponse<NewsItem[]>>) {
        const data = await api.getAll();
        res.json({fromCache: false, data});
}
