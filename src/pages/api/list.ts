import {NextApiRequest, NextApiResponse} from "next";
import serverApi from "../../api-helpers/server.api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const posts = await serverApi.getAllPosts();
    res.json(posts);
}
