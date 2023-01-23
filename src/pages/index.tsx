import {GetServerSideProps} from "next";
import serverApi from "../api-helpers/server.api";
import {PostSummary} from "../api-helpers/models";
import {Provider} from "react-redux";
import store from "../redux/store";
import App from "../components/App";

export default function Home({posts}: {posts: PostSummary[]}) {
    return (
        <Provider store={store}>
            <App posts={posts} />
        </Provider>
    )
}

// SSR
export const getServerSideProps: GetServerSideProps = async () => {
    console.log('SSR Called');
    const postsSummaries = await serverApi.getAllPosts();
    return {
        props: {posts: postsSummaries}
    }
}
