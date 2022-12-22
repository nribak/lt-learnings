import {NewsItem} from "../data/models";
import {MDBContainer} from "mdb-react-ui-kit";
import NewsList from "./list/NewsList";
import clientAPI from "../data/clientAPI";
import {useRouter} from "next/router";
import NewPostItem from "./list/NewPostItem";

export default function App({data}: {data: NewsItem[]}) {
    const router = useRouter();

    const handleNewPost = () => {
        clientAPI.create().then(id => {
            router.push(`/article/${id}`).then();
        })
    }

    return (
        <MDBContainer className="pt-2">
            <NewPostItem onNew={handleNewPost}/>
            <NewsList data={data}  />
        </MDBContainer>
    )
}
