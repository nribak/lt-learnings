import {NewsItem} from "../../data/models";
import {MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardTitle, MDBIcon} from "mdb-react-ui-kit";
import Link from "next/link";
import LastUpdatedText from "../LastUpdatedText";
import {MouseEvent} from "react";

export default function NewsSingleItem({post, onDelete}: {post: NewsItem, onDelete: (id: string) => void}) {
    const {title, updatedAt, id} = post;
    const handleClick = (ev: MouseEvent) => {
        ev.stopPropagation();
        ev.preventDefault();
        onDelete(id);

    }
    return (
        <MDBCard className="h-100" shadow='0' border="dark">
            <MDBCardBody>
                <Link href={`/article/${id}`}>
                    <MDBCardTitle className="text-capitalize app-font-bold">{title}</MDBCardTitle>
                </Link>
            </MDBCardBody>
            <MDBCardFooter className="p-2">
                <MDBBtn outline  color="danger" size="sm" onClick={handleClick} className="mx-2"><MDBIcon fas icon="trash-alt" /> Delete</MDBBtn>
                <LastUpdatedText time={updatedAt} />
            </MDBCardFooter>
        </MDBCard>

    )
}
