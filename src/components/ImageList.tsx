import {MDBCard, MDBCol, MDBRow} from "mdb-react-ui-kit";
import PostImage from "./PostImage";

export default function ImageList({imageUrls}: {imageUrls: string[]}) {

    return (
        <MDBRow className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {imageUrls.map(image => {
                return (
                    <MDBCol key={image}>
                        <MDBCard>
                            <PostImage imageUrl={image} />
                        </MDBCard>
                    </MDBCol>
                )
            })}
        </MDBRow>
    )
}
