import ImageListItem from "./ImageListItem";
import HorizontalScroll from "../common/HorizontalScroll";

export default function ImageList({images, onImageDelete}: {images: string[]|string, onImageDelete: (image: string) => void}) {
    const arr = (typeof images === 'string') ? [] : images;
    return (
        <HorizontalScroll>
            {arr.map(image => {
                return (
                    <div key={image} className="mb-1 p-1">
                        <ImageListItem image={image} onDeleteClicked={onImageDelete} />
                    </div>
                )
            })}
        </HorizontalScroll>
    )
}
