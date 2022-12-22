import {MDBBtn, MDBCol, MDBIcon, MDBRow} from "mdb-react-ui-kit";
import AppImage from "../common/AppImage";

export default function ImageList({images}: {images: string[]}) {

    return (
            <MDBRow className="row-cols-2 row-cols-md-4">
                {images.map(image => {
                    return (
                        <MDBCol key={image} className="mb-1 border p-1">
                            <AppImage imageKey={image}/>
                                <MDBBtn color="danger" size="sm" block>
                                    <MDBIcon fas icon="trash"  size="lg" />
                                    <span> Remove</span>
                                </MDBBtn>
                        </MDBCol>
                    )
                })}
            </MDBRow>
    )
}
