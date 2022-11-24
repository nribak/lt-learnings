import {NextApiRequest, NextApiResponse} from "next";
import API from "../../../data/api";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
    const {id} = req.body;
    await API.delete(id)
    res.status(200).json({});
}
