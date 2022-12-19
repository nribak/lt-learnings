import {Post} from "../api-helpers/models";
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle} from "mdb-react-ui-kit";

export default function PostDetails({post}: {post: Post}) {
    const {title, details} = post;
    return (
        <MDBCard>
            <MDBCardBody>
                <MDBCardTitle className="app-font-bold">{title}</MDBCardTitle>
                <MDBCardText className="app-font-light">{details}</MDBCardText>
            </MDBCardBody>
        </MDBCard>
    )
}
