import {NextApiRequest, NextApiResponse} from "next";
import formidable from "formidable";
import {NewsItem} from "../../../../data/models";
import fs from 'fs';
import API from "../../../../data/api";

const parseForm = (req: NextApiRequest): Promise<[formidable.File, string]> => {
    return new Promise<[formidable.File, string]>((resolve, reject) => {
        const form = new formidable.IncomingForm({

        });
        form.parse(req, (err, fields, files) => {
            if(err)
                reject(err);
            else
                resolve([files.file as formidable.File, fields.postId as string])
        });
    })
}


export const config = {api: {bodyParser: false}};

export default async function handler(req: NextApiRequest, res: NextApiResponse<NewsItem|null>) {
    const [file, postId] = await parseForm(req);
    const fileName = file.originalFilename ?? file.filepath;
    const buffer = fs.readFileSync(file.filepath);
    const base64 = buffer.toString('base64');
    const response = await API.upload(fileName, base64, postId);
    res.json(response);
}
