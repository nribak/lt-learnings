import {NewsItem} from "../data/models";
import {MDBContainer} from "mdb-react-ui-kit";
import PostList from "./PostList";

export default function App({data}: {data: NewsItem[]}) {

    const handleNewPost = () => {

    }

    return (
        <MDBContainer>

            <PostList data={data} onNew={handleNewPost} />
        </MDBContainer>
    )
}
