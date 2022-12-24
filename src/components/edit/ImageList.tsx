import {MDBCol, MDBRow} from "mdb-react-ui-kit";
import ImageListItem from "./ImageListItem";

export default function ImageList({images, onImageDelete}: {images: string[], onImageDelete: (image: string) => void}) {

    return (
            <MDBRow className="row-cols-2 row-cols-md-4">
                {images.map(image => {
                    return (
                        <MDBCol key={image} className="mb-1 border p-1">
                            <ImageListItem image={image} onDeleteClicked={onImageDelete} />
                        </MDBCol>
                    )
                })}
            </MDBRow>
    )
}
