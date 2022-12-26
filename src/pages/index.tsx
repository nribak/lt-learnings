import {MDBContainer} from "mdb-react-ui-kit";
import {GetServerSideProps} from "next";
import serverApi from "../api-helpers/server.api";
import {PostSummary} from "../api-helpers/models";
import PostsList from "../components/PostsList";

export default function Home({posts}: {posts: PostSummary[]}) {
    return (
        <MDBContainer className="pt-2">
            <PostsList postSummaries={posts} />
        </MDBContainer>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const postsSummaries = await serverApi.getAllPosts();
    return {
        props: {posts: postsSummaries}
    }
}
