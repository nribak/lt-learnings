import {PostSummary} from "../api-helpers/models";
import {MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";
import NewPostButton from "./NewPostButton";
import PostItem from "./PostItem";


export interface PostsListProps { postSummaries: PostSummary[], onPostDelete: (postId: string) => void }

export default function PostsList({postSummaries, onPostDelete}: PostsListProps) {

    return (
        <MDBListGroup>
            {postSummaries.map(summary => {
                return (
                        <MDBListGroupItem action key={summary.id}>
                            <PostItem post={summary} onPostDelete={onPostDelete}/>
                        </MDBListGroupItem>
                )
            })}
            <MDBListGroupItem action>
                <NewPostButton />
            </MDBListGroupItem>
        </MDBListGroup>
    )
}
