import {NewsItem} from "../data/models";
import NavigationTab from "./NavigationTab";
import {MDBContainer} from "mdb-react-ui-kit";
import Conditional from "./common/Conditional";
import NewsItemDetails from "./NewsItemDetails";
import NewsItemDetailsEdit, {FormData} from "./NewsItemDetailsEdit";
import {useToggle} from "./utils/hooks";
import clientAPI from "../data/clientAPI";
import {useRouter} from "next/router";

export default function ArticleEdit({item}: {item: NewsItem}) {
    const router = useRouter();
    const [editMode, toggleEditMode] = useToggle(item.title.length === 0);

    const handleDelete = () => {

    }

    const handleEdit = ({title, details}: FormData) => {
        clientAPI.update(item.id, title, details).then(router.reload);
    }

    return (
        <>
            <NavigationTab onEdit={toggleEditMode} onDelete={handleDelete}/>
            <MDBContainer className="pt-2">
                <Conditional tester={editMode}>
                    <NewsItemDetailsEdit item={item} onEdited={handleEdit} />
                    <NewsItemDetails item={item} />
                </Conditional>
            </MDBContainer>
        </>
    )
}
