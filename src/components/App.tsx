import {MDBContainer} from "mdb-react-ui-kit";
import NewsList from "./list/NewsList";
import clientAPI from "../data/clientAPI";
import NewPostItem from "./list/NewPostItem";
import useSWR from "swr";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store";
import postsSlice, {postsSliceThunks} from "../redux/posts.slice";
import dynamic from "next/dynamic";

export default function App() {
    const state = useAppSelector(st => st.posts);
    const dispatch = useAppDispatch();

    const {data, isLoading} = useSWR('all', clientAPI.getAll);

    useEffect(() => {
        if(data !== undefined && data.data.length > 0) {
            dispatch(postsSlice.actions.applyData(data.data));
        }
    }, [data, dispatch])

    const LoadingModal = dynamic(() => import('./common/SpinnerModal'), {ssr: false});
    return (
        <>
            <LoadingModal show={isLoading || state.isLoading}/>
            <MDBContainer className="pt-2">
                <NewPostItem onNew={() => dispatch(postsSliceThunks.createPost())}/>
                <NewsList data={state.posts} onDelete={id => dispatch(postsSliceThunks.deletePost(id))} />
            </MDBContainer>
        </>
    )
}
