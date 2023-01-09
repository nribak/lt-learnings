import Image from 'next/image'

export default function PostImage({imageUrl}: {imageUrl: string}) {

    return (
        <div className="img-container">
            <Image src={imageUrl} alt="post image" fill className="img-box" />
        </div>
    )
}
