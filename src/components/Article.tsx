import {NewsItem} from "../data/models";
import NavigationTab from "./edit/NavigationTab";
import {MDBContainer} from "mdb-react-ui-kit";
import Conditional from "./common/Conditional";
import NewsItemDetails from "./edit/NewsItemDetails";
import NewsItemDetailsEdit, {FormData} from "./edit/NewsItemDetailsEdit";
import {useToggle} from "../utils/hooks";
import clientAPI from "../data/clientAPI";
import {useRouter} from "next/router";
import {useCallback, useState} from "react";
import ImageList from "./edit/ImageList";
import ImageInput from "./edit/ImageInput";
import PageSpinner from "./common/PageSpinner";

export default function Article({item}: {item: NewsItem}) {
    const router = useRouter();
    const [editMode, toggleEditMode] = useToggle(item.title?.length === 0);
    const [isLoading, setIsLoading] = useState(false);

    const onDone = useCallback(() => {
        router.reload();
        setIsLoading(false);
    }, [router]);

    const handleEdit = ({title, details}: FormData) => {
        setIsLoading(true);
        clientAPI.update(item.id, title, details).then(onDone);
    }

    const handleFileAppend = (file: File) => {
        setIsLoading(true);
        clientAPI.appendImage(item.id, file).then(onDone)
    }

    const handleImageDelete = (image: string) => {
        setIsLoading(true);
        clientAPI.deleteImage(image, item.id).then(onDone)
    }

//https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.UpdateExpressions.html
    return (
        <>
            <NavigationTab onEdit={toggleEditMode} />
            <MDBContainer className="pt-2">
                <Conditional tester={editMode}>
                    <NewsItemDetailsEdit item={item} onEdited={handleEdit} />
                    <NewsItemDetails item={item} />
                </Conditional>
                <Conditional tester={editMode}>
                    <ImageInput onFileRequested={handleFileAppend} />
                </Conditional>
                <hr/>
                <ImageList images={item.imageIds} onImageDelete={handleImageDelete}/>
                <Conditional tester={isLoading}>
                    <PageSpinner />
                </Conditional>
            </MDBContainer>
        </>
    )
}
