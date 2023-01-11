import {NextApiRequest, NextApiResponse} from "next";
import API from "../../../data/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse<{id: string}>) {
    const newsItem = await API.create();
    res.json(newsItem);
}
