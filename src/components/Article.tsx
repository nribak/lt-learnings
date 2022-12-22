import {NewsItem} from "../data/models";
import NavigationTab from "./edit/NavigationTab";
import {MDBContainer, MDBSpinner} from "mdb-react-ui-kit";
import Conditional from "./common/Conditional";
import NewsItemDetails from "./edit/NewsItemDetails";
import NewsItemDetailsEdit, {FormData} from "./edit/NewsItemDetailsEdit";
import {useToggle} from "./utils/hooks";
import clientAPI from "../data/clientAPI";
import {useRouter} from "next/router";
import {useState} from "react";
import ImageList from "./edit/ImageList";

export default function Article({item}: {item: NewsItem}) {
    const router = useRouter();
    const [editMode, toggleEditMode] = useToggle(item.title?.length === 0);
    const [isLoading, setIsLoading] = useState(false);

    const handleEdit = ({title, details}: FormData) => {
        setIsLoading(true);
        clientAPI.update(item.id, title, details).then(() => {
            router.reload();
            setIsLoading(false);
        });
    }

    const handleFileAppend = (file: File) => {
        setIsLoading(true);
        clientAPI.appendImage(item.id, file).then(() => {
            router.reload();
            setIsLoading(false);
        })
    }

    return (
        <>
            <NavigationTab onEdit={toggleEditMode} />
            <MDBContainer className="pt-2">
                <Conditional tester={editMode}>
                    <NewsItemDetailsEdit item={item} onEdited={handleEdit} />
                    <NewsItemDetails item={item} />
                </Conditional>
                <ImageList images={item.imageIds} onFileRequested={handleFileAppend}/>
                <Conditional tester={isLoading}>
                    <MDBSpinner role='status'/>
                </Conditional>
            </MDBContainer>
        </>
    )
}
