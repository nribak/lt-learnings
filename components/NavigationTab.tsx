import {MDBBtn, MDBContainer, MDBIcon, MDBNavbar} from "mdb-react-ui-kit";
import Link from "next/link";

export default function NavigationTab({onEdit, onDelete}: {onEdit: () => void, onDelete: () => void}) {

    return (
        <MDBNavbar>
            <MDBContainer>
                <Link href="/" passHref>
                    <MDBBtn color="link">
                        <MDBIcon fas icon="arrow-left" /> Newsfeed
                    </MDBBtn>
                </Link>
                <div>
                    <MDBBtn color="warning" floating outline className="ms-2" onClick={onEdit}>
                        <MDBIcon fas icon="pen" />
                    </MDBBtn>
                    <MDBBtn color="danger" floating outline className="ms-2" onClick={onDelete}>
                        <MDBIcon fas icon="trash-alt" />
                    </MDBBtn>
                </div>
            </MDBContainer>
        </MDBNavbar>
    )
}
