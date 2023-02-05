import {NextApiRequest, NextApiResponse} from "next";
import serverApi from "../../api-helpers/server.api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {id} = req.body;
    const result = await serverApi.deletePost(id);
    res.json(result);
}
