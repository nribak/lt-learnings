import {NewsItem} from "../data/models";
import NavigationTab from "./edit/NavigationTab";
import {MDBContainer} from "mdb-react-ui-kit";
import Conditional from "./common/Conditional";
import NewsItemDetails from "./edit/NewsItemDetails";
import NewsItemDetailsEdit, {FormData} from "./edit/NewsItemDetailsEdit";
import {useEffect} from "react";
import ImageList from "./edit/ImageList";
import ImageInput from "./edit/ImageInput";
import PageSpinner from "./common/PageSpinner";
import {useAppDispatch, useAppSelector} from "../redux/store";
import postSlice, {postSliceThunks} from "../redux/post.slice";

export default function Article({item}: {item: NewsItem}) {
    const state = useAppSelector(st => st.post);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postSlice.actions.applyData(item));
    }, [item, dispatch]);


    const handleEdit = ({title, details}: FormData) => {
        dispatch(postSliceThunks.edit({id: item.id, title, details}));
    }

    const handleFileAppend = (file: File) => {
        // setIsLoading(true);
        // clientAPI.appendImage(item.id, file).then(onDone)
    }

    const handleImageDelete = (image: string) => {
        // setIsLoading(true);
        // clientAPI.deleteImage(image, item.id).then(onDone)
    }


    return (
        <>
            <NavigationTab onEdit={() => dispatch(postSlice.actions.toggleEditMode())} />
            <MDBContainer className="pt-2">
                <Conditional tester={state.editMode}>
                    <NewsItemDetailsEdit item={state.post} onEdited={handleEdit} />
                    <NewsItemDetails item={state.post} />
                </Conditional>
                <Conditional tester={state.editMode}>
                    <ImageInput onFileRequested={handleFileAppend} />
                </Conditional>
                <hr/>
                <ImageList images={state.post.imageIds} onImageDelete={handleImageDelete}/>
                <Conditional tester={state.isLoading}>
                    <PageSpinner />
                </Conditional>
            </MDBContainer>
        </>
    )
}
