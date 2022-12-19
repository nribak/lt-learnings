import {MDBContainer} from "mdb-react-ui-kit";
import {GetServerSideProps} from "next";
import serverApi from "../../api-helpers/server.api";
import {Post} from "../../api-helpers/models";
import PostDetails from "../../components/PostDetails";

export default function PostPage(props: {post: Post}) {
    return (
        <MDBContainer className="pt-2">
            <PostDetails post={props.post} />
        </MDBContainer>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;
    const post = await serverApi.getPostById(id as string);

    if(post) {
        return {
            props: {post}
        }
    } else {
        return {
            notFound: true
        }
    }
}
