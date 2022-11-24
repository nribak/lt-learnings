import {NewsItem} from "../data/models";
import {MDBRow} from "mdb-react-ui-kit";
import PostItem from "./PostItem";
import AppCol from "./common/AppCol";
import NewPostItem from "./NewPostItem";

export default function PostList({data, onNew}: {data: NewsItem[], onNew: () => void}) {
    return (
        <MDBRow>
            <AppCol>
                <NewPostItem onNew={onNew}/>
            </AppCol>
            {data.map(item => {
                return (
                    <AppCol key={item.id}>
                        <PostItem post={item} />
                    </AppCol>
                )
            })}
        </MDBRow>
    )
}
