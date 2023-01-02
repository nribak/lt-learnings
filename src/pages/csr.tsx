import {MDBContainer} from "mdb-react-ui-kit";
import PostsList from "../components/PostsList";
import clientApi from "../api-helpers/client.api";
import useSWR from 'swr';


export default function HomeCSR() {
    console.log('render CSR');
    const {data, isLoading, error} = useSWR('all', clientApi.getAllPosts);

    if(error) {
        return (
            <MDBContainer className="pt-2">
                {JSON.stringify(error)}
            </MDBContainer>
        )
    }

    else if(isLoading) {
        return (
            <MDBContainer className="pt-2">
                <div>
                    Loading...
                </div>
            </MDBContainer>
        )
    } else return (
        <MDBContainer className="pt-2">
            <PostsList postSummaries={data ?? []} />
        </MDBContainer>
    )
}

