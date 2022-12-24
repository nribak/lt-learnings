import {MDBBtn, MDBFile} from "mdb-react-ui-kit";
import {useFile} from "../../utils/hooks";
import {FormEvent} from "react";

export default function ImageInput(props: {onFileRequested: (file: File) => void}) {
    const [file, setFile] = useFile();
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if(file)
            props.onFileRequested(file);
    }
    return (
        <form className="d-flex justify-content-between align-items-center mt-2" onSubmit={handleSubmit}>
            <MDBFile accept="image/*" onChange={setFile} />
            <MDBBtn className="mx-2" type="submit" disabled={file === undefined}>Add</MDBBtn>
        </form>
    )
}
