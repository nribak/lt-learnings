import {PostSummary} from "../api-helpers/models";
import {MDBContainer} from "mdb-react-ui-kit";
import PostsList from "../components/PostsList";
import {GetStaticProps} from "next";
import serverApi from "../api-helpers/server.api";

export default function SSGHome({posts}: {posts: PostSummary[]}) {
    return (
        <MDBContainer className="pt-2">
            <PostsList postSummaries={posts} />
        </MDBContainer>
    )
}

// SSG
export const getStaticProps: GetStaticProps = async (context) => {
    console.log('SSG Called');
    const postsSummaries = await serverApi.getAllPosts();
    return {
        props: {posts: postsSummaries}
    }
}
