import {NextApiRequest, NextApiResponse} from "next";
import serverApi from "../../api/server.api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {title, details} = req.body;
    const post = await serverApi.createPost(title, details);
    res.json(post);
}
