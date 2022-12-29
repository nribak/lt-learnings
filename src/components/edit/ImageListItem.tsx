import AppImage from "../common/AppImage";
import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";

export default function ImageListItem({image, onDeleteClicked}: {image: string, onDeleteClicked: (image: string) => void}) {

    const handleDelete = () => {
        onDeleteClicked(image);
    }

    return (
        <>
            <AppImage imageKey={image}/>
            <MDBBtn color="danger" size="sm" block className="mt-2" onClick={handleDelete}>
                <MDBIcon fas icon="trash"  size="lg" />
            </MDBBtn>
        </>
    )
}
