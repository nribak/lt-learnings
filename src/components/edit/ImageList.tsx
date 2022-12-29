import ImageListItem from "./ImageListItem";
import HorizontalScroll from "../common/HorizontalScroll";

export default function ImageList({images, onImageDelete}: {images: string[], onImageDelete: (image: string) => void}) {

    return (
        <HorizontalScroll>
            {images.map(image => {
                return (
                    <div key={image} className="mb-1 p-1">
                        <ImageListItem image={image} onDeleteClicked={onImageDelete} />
                    </div>
                )
            })}
        </HorizontalScroll>
    )
}
