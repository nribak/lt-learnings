import {PostSummary} from "../api-helpers/models";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import clientApi from "../api-helpers/client.api";

export interface PostsSummaries {
    posts: PostSummary[],
    isLoading: boolean
}

const sliceName = 'summaries';
const initState: PostsSummaries = {posts: [], isLoading: false};


export const addPostThunk = createAsyncThunk(
    sliceName + '/add',
    async (): Promise<PostSummary> => {
        return await clientApi.createPost('newly created post', '');
    }
);

export const deletePostThunk = createAsyncThunk(
    sliceName + '/delete',
    async (id: string): Promise<[string, boolean]> => {
        return [id, await clientApi.deletePost(id)]
    }
)


const summariesSlice = createSlice({
    name: sliceName,
    initialState: initState,
    reducers: {
        applyData: (state, {payload}: PayloadAction<PostSummary[]>) => {
            console.log(payload);
            state.posts = payload;
        }
    },
    extraReducers: builder => builder
        .addCase(addPostThunk.pending, state => {
            state.isLoading = true;
        })
        .addCase(addPostThunk.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.posts.push(payload);
        })
        .addCase(deletePostThunk.pending, state => {
            state.isLoading = true;
        })
        .addCase(deletePostThunk.fulfilled, (state, {payload}) => {
            const [postId, deleteResult] = payload;
            state.isLoading = false;
            if(deleteResult) {
                // state.posts = state.posts.filter(post => post.id !== postId);
                const idx = state.posts.findIndex(post => post.id === postId);
                if(idx !== -1)
                    state.posts.splice(idx, 1);
            }
        })
});

export default summariesSlice;
