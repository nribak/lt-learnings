import {PostSummary} from "../api-helpers/models";
import {MDBBtn} from "mdb-react-ui-kit";
import Link from "next/link";

export default function PostItem({post, onPostDelete}: {post: PostSummary, onPostDelete: (postId: string) => void}) {

    const handleDelete = () => {
        onPostDelete(post.id);
    }


    return (
        <div>
            <div className="fs-4">{post.title}</div>
            <div className="d-flex justify-content-between align-items-center">
                <Link href={`/posts/${post.id}`} >
                    <MDBBtn color="info">GO</MDBBtn>
                </Link>
                <MDBBtn color="danger"  className="mt-2" onClick={handleDelete}>Delete</MDBBtn>
            </div>
        </div>
    )
}
