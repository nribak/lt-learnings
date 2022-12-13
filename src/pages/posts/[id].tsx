import {MDBContainer} from "mdb-react-ui-kit";
import {useRouter} from "next/router";

export default function Post() {
    const router = useRouter();
    return (
        <MDBContainer>
            <div className="h2">
                You are at post = {router.query.id}
            </div>
        </MDBContainer>
    )
}
