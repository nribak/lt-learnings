import {MDBContainer} from "mdb-react-ui-kit";
import {GetServerSideProps} from "next";
import serverApi from "../../api-helpers/server.api";
import {Post} from "../../api-helpers/models";
import PostDetails from "../../components/PostDetails";
import TopNav from "../../components/TopNav";
import {useState} from "react";
import PostEdit from "../../components/PostEdit";

export default function PostPage({post}: {post: Post}) {
    const [editMode, setEditMode] = useState(post.title.length === 0);

    return (
        <>
            <TopNav isEditMode={editMode} setEditMode={setEditMode}/>
            <MDBContainer className="pt-2">
                {editMode ? <PostEdit post={post}/> : <PostDetails post={post} />}
            </MDBContainer>
        </>
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
