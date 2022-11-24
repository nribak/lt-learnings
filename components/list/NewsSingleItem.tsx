import {NewsItem} from "../../data/models";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardText, MDBFooter, MDBIcon, MDBRipple} from "mdb-react-ui-kit";
import Link from "next/link";
import LastUpdatedText from "../LastUpdatedText";
import {MouseEvent} from "react";
import clientAPI from "../../data/clientAPI";
import {useRouter} from "next/router";

export default function NewsSingleItem({post}: {post: NewsItem}) {
    const router = useRouter();
    const {title, updatedAt, id} = post;
    const handleClick = (ev: MouseEvent) => {
        ev.stopPropagation();
        clientAPI.delete(post.id).then(router.reload);

    }
    return (
        <MDBRipple className="h-100 w-100">
            <Link href={`/article/${id}`}>
                <MDBCard className="h-100" shadow='0' border="dark">
                    <MDBCardBody>
                        <MDBCardText className="text-capitalize">{title}</MDBCardText>

                    </MDBCardBody>
                    <MDBFooter className="p-2">
                        <LastUpdatedText time={updatedAt} />
                        <MDBBtn color="danger" block onClick={handleClick}><MDBIcon fas icon="trash-alt" /> Delete</MDBBtn>
                    </MDBFooter>
                </MDBCard>
            </Link>
        </MDBRipple>
    )
}
