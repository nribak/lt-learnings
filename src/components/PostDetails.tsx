import {Post} from "../api-helpers/models";
import {MDBCard, MDBCardBody, MDBCardText, MDBCardTitle} from "mdb-react-ui-kit";

export default function PostDetails({post}: {post: Post}) {
    const {title, details} = post;
    return (
        <MDBCard>
            <MDBCardBody>
                <MDBCardTitle>{title}</MDBCardTitle>
                <MDBCardText>{details}</MDBCardText>
            </MDBCardBody>
        </MDBCard>
    )
}
