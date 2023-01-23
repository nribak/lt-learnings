import {PostSummary} from "../api-helpers/models";
import {MDBBtn} from "mdb-react-ui-kit";
import Link from "next/link";
import {useAppDispatch} from "../redux/store";

export default function PostItem({post}: {post: PostSummary}) {
    const dispatcher = useAppDispatch();

    const handleDelete = () => {
        const id = post.id;
        //TODO: delete post (id)

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
