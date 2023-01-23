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
)


const summariesSlice = createSlice({
    name: sliceName,
    initialState: initState,
    reducers: {
        applyData: (state, {payload}: PayloadAction<PostSummary[]>) => {
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
});

export default summariesSlice;
