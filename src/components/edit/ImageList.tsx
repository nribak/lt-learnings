import {MDBBtn, MDBCol, MDBFile, MDBRow} from "mdb-react-ui-kit";
import AppImage from "../common/AppImage";
import {FormEvent} from "react";
import {useFile} from "../utils/hooks";

export default function ImageList({images, onFileRequested}: {images: string[], onFileRequested: (file: File) => void}) {
    const [file, setFile] = useFile()

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if(file)
            onFileRequested(file);
    }

    return (
        <div>
            <MDBRow className="row-cols-2 row-cols-md-4">
                {images.map(image => <MDBCol key={image} className="mb-1"><AppImage imageKey={image}/></MDBCol>)}
            </MDBRow>
            <form className="d-flex justify-content-between align-items-center mt-2" onSubmit={handleSubmit}>
                <MDBFile accept="image/*" onChange={setFile} />
                <MDBBtn className="mx-2" type="submit">Add</MDBBtn>
            </form>
        </div>
    )
}
