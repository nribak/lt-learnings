import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NewsItem, PostsState} from "../data/models";
import clientAPI from "../data/clientAPI";

const initState: PostsState = {posts: [], isLoading: false}
const sliceName = 'posts';
export const postsSliceThunks = {
    createPost: createAsyncThunk(
        sliceName + '/create',
        async (): Promise<NewsItem> => {
            return await clientAPI.create();
        }
    ),
    deletePost: createAsyncThunk(
        sliceName + '/delete',
        async (id: string)=> {
            await clientAPI.delete(id);
            return id;
        }
    )

}

const postsSlice = createSlice({
    name: sliceName,
    initialState: initState,
    reducers: {
        applyData: (state, {payload}: PayloadAction<NewsItem[]>) => {
            state.posts = [...payload];
        }
    },
    extraReducers: builder => builder
        .addCase(postsSliceThunks.createPost.pending, state => {
            state.isLoading = true;
        })
        .addCase(postsSliceThunks.createPost.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.posts.push(payload);
        })
        .addCase(postsSliceThunks.deletePost.pending, state => {
            state.isLoading = true;
        })
        .addCase(postsSliceThunks.deletePost.fulfilled, (state, {payload}) => {
            const idx = state.posts.findIndex(p => p.id === payload);
            state.posts.splice(idx, 1);
            state.isLoading = false;
        })
});

export default postsSlice;
