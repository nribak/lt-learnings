import {PostSummary} from "../api-helpers/models";
import {MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";
import Link from "next/link";
import NewPostButton from "./NewPostButton";


export interface PostsListProps { postSummaries: PostSummary[] }

export default function PostsList({postSummaries}: PostsListProps) {

    return (
        <MDBListGroup>
            {postSummaries.map(summary => {
                return (
                    <Link href={`/posts/${summary.id}`} key={summary.id}>
                        <MDBListGroupItem action>
                            {summary.title}
                        </MDBListGroupItem>
                    </Link>
                )
            })}
            <MDBListGroupItem action>
                <NewPostButton />
            </MDBListGroupItem>
        </MDBListGroup>
    )
}
