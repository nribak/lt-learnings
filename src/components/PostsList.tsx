import {PostSummary} from "../api-helpers/models";
import {MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";
import Link from "next/link";

export default function PostsList({postSummaries}: {postSummaries: PostSummary[]}) {

    return (
        <MDBListGroup>
            {postSummaries.map(summary => {
                return (
                    <Link href={`/posts/${summary.id}`} key={summary.id}>
                        <MDBListGroupItem  >
                            {summary.title}
                        </MDBListGroupItem>
                    </Link>
                )
            })}
        </MDBListGroup>
    )
}
