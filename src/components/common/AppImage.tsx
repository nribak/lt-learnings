import Image from "next/image";
import Conditional from "./Conditional";

export const IMAGE_BASE_PATH = 'https://d2b1beblys53u7.cloudfront.net/'
export default function AppImage({imageKey}: {imageKey?: string}) {
    const src = IMAGE_BASE_PATH + imageKey;
    console.log(imageKey);
    return (
        <Conditional tester={imageKey !== undefined && imageKey.length > 0} >
            <Image src={src} alt={imageKey ?? ''} fill className="card-img img-fluid position-static"/>
        </Conditional>
    )
}
