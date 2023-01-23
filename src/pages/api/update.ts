import {NextApiRequest, NextApiResponse} from "next";
import serverApi from "../../api-helpers/server.api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {id, title, details} = req.body;
    const post = await serverApi.updatePost(id, title, details);
    res.json(post);
}