import {NextApiRequest, NextApiResponse} from "next";
import API from "../../../../data/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {imageId, postId} = req.body;
    const status = await API.deleteImage(imageId, postId)
    res.status(status).send({});
}
