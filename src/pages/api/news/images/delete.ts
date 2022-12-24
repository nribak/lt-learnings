import {NextApiRequest, NextApiResponse} from "next";
import API from "../../../../data/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {imageId} = req.body;
    const status = await API.deleteImage(imageId)
    res.status(status).send({});
}
