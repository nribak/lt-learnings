import {Post} from "../api-helpers/models";
import {MDBCard, MDBCardBody, MDBCardFooter, MDBCardText, MDBCardTitle} from "mdb-react-ui-kit";
import ImageList from "./ImageList";

export default function PostDetails({post}: {post: Post}) {
    const {title, details} = post;
    return (
        <MDBCard>
            <MDBCardBody>
                <MDBCardTitle className="app-font-bold">{title}</MDBCardTitle>
                <MDBCardText className="app-font-light">{details}</MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
                <ImageList imageUrls={post.imageIds ?? []} />
            </MDBCardFooter>
        </MDBCard>
    )
}
