import {DeleteObjectCommand, S3Client} from "@aws-sdk/client-s3";
import {Upload} from "@aws-sdk/lib-storage";
import {
    CompleteMultipartUploadCommandOutput
} from "@aws-sdk/client-s3/dist-types/commands/CompleteMultipartUploadCommand";

const client = new S3Client({region: 'us-east-1'});
const bucketName = 'newletter-photos'

export const objectKeyForImage = (imageId: string, postId: string): string => postId + '_' + imageId;

const s3Storage = {
    async uploadFile(objectKey: string, file: string): Promise<string> {
        const base64Data = Buffer.from(file.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        const type = file.split(';')[0].split('/')[1];
        const upload = new Upload({
            client: client,
            params: {
                Bucket: bucketName,
                Key: objectKey,
                Body: base64Data,
                ContentEncoding: 'base64',
                ContentType: `image/${type}`
            }
        });
        const respond = await upload.done() as CompleteMultipartUploadCommandOutput;
        return respond.Key;
    },
    async deleteFile(objectKey: string): Promise<number> {
        const data = await client.send(new DeleteObjectCommand({
            Bucket: bucketName,
            Key: objectKey
        }));
        return data.$metadata.httpStatusCode
    }
}

export default s3Storage;
