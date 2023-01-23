import {PostSummary} from "../api-helpers/models";
import PostsList from "./PostsList";
import {MDBContainer, MDBSpinner} from "mdb-react-ui-kit";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {useEffect} from "react";
import summariesSlice from "../redux/summaries.slice";

export default function App({posts}: {posts: PostSummary[]}) {
    const state = useAppSelector(st => st.summaries);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(summariesSlice.actions.applyData(posts));
    }, [dispatch, posts]);

    return (
        <MDBContainer className="pt-2">
            {state.isLoading && <MDBSpinner role='status'/>}
            <PostsList postSummaries={state.posts} />
        </MDBContainer>
    )
}
