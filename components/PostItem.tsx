import {NewsItem} from "../data/models";
import {MDBCard, MDBCardBody, MDBCardFooter, MDBCardText, MDBRipple} from "mdb-react-ui-kit";
import Link from "next/link";

export default function PostItem({post}: {post: NewsItem}) {
    const {title, updatedAt, id} = post;
    return (
        <MDBRipple className="h-100 w-100">
            <Link href={`/article/${id}`}>
                <MDBCard className="h-100" shadow='0' border="dark">
                    <MDBCardBody>
                        <MDBCardText className="text-capitalize">{title}</MDBCardText>
                        <MDBCardFooter>
                            <small className='text-muted'>31/12/2022 10:45</small>
                        </MDBCardFooter>
                    </MDBCardBody>
                </MDBCard>
            </Link>
        </MDBRipple>
    )
}
