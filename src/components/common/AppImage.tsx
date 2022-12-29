import Image from "next/image";
import Conditional from "./Conditional";
import {ImageHorizontalBox} from "../../styles/styles";

const IMAGE_BASE_PATH = 'https://d2b1beblys53u7.cloudfront.net/';

export default function AppImage({imageKey}: {imageKey?: string}) {
    const src = IMAGE_BASE_PATH + imageKey;
    const sizes = '100%';
    return (
        <Conditional tester={imageKey !== undefined && imageKey.length > 0} >
            <ImageHorizontalBox imageWidth={85} type="vw">
                <Image
                    src={src}
                    alt={imageKey ?? ''}
                    fill
                    sizes={sizes}
                    className="card-img img-fluid img-object-fit"
                    priority={false}
                    // placeholder="blur"
                    // blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                />
            </ImageHorizontalBox>
        </Conditional>
    )
}
