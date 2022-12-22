import {NewsItem} from "../../data/models";
import {MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardText} from "mdb-react-ui-kit";
import LastUpdatedText from "../LastUpdatedText";

export default function NewsItemDetails({item}: {item: NewsItem}) {
    const {title, details, updatedAt} = item;
    return (
        <MDBCard className="large-card-height">
            <MDBCardHeader className="app-font-bold text-capitalize">{title}</MDBCardHeader>
            <MDBCardBody>
                <MDBCardText className="details-text">
                    {details}
                </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
                <LastUpdatedText time={updatedAt} />
            </MDBCardFooter>
        </MDBCard>
    )
}
