import {MDBBtn, MDBIcon} from "mdb-react-ui-kit";

export default function NewPostItem(props: {onNew: () => void}) {

    return (
        <MDBBtn color="dark" block outline onClick={props.onNew}>
            <MDBIcon fab icon='plus' /> Create News Post
        </MDBBtn>
    )
}
