import {NewsItem, PostState} from "../data/models";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FormData} from "../components/edit/NewsItemDetailsEdit";
import clientAPI from "../data/clientAPI";

export const initState: PostState = {post: {id: '', imageIds: [], updatedAt: 0, createdAt: 0}, isLoading: false, editMode: false};
const sliceName = 'post';

export const postSliceThunks = {
    edit: createAsyncThunk(
        sliceName + '/edit',
        async ({id, title, details}: {id: string} & FormData) => {
            return await clientAPI.update(id, title, details);
        }
    ),
    upload: createAsyncThunk(
        sliceName + '/upload',
        async ({id, file}: {id: string, file: File}) => {
            return clientAPI.appendImage(id, file)
        }
    )
}

const postSlice = createSlice({
    name: sliceName,
    initialState: initState,
    reducers: {
        applyData: (state, {payload}: PayloadAction<NewsItem>) => {
            state.post = payload;
            state.editMode = payload.details?.length === 0
        },
        toggleEditMode: state => {
            state.editMode = !state.editMode;
        }
    },
    extraReducers: builder => builder
        .addCase(postSliceThunks.edit.pending, state => {
            state.isLoading = true;
        })
        .addCase(postSliceThunks.edit.fulfilled, (state, {payload}) => {
            console.log(payload)
            state.editMode = false;
            state.isLoading = false;
            if(payload)
                state.post = payload;
        })
});

export default postSlice;
