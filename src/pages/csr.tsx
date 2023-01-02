import {MDBContainer} from "mdb-react-ui-kit";
import {PostSummary} from "../api-helpers/models";
import PostsList from "../components/PostsList";
import clientApi from "../api-helpers/client.api";
import {useResource} from "../utils/hooks";

export default function HomeCSR() {
    console.log('render CSR');
    const posts = useResource<PostSummary[]>(clientApi.getAllPosts);

    return (
        <MDBContainer className="pt-2">
            <PostsList postSummaries={posts ?? []} />
        </MDBContainer>
    )
}

