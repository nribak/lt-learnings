import {NewsItem} from "../data/models";
import NavigationTab from "./edit/NavigationTab";
import {MDBContainer} from "mdb-react-ui-kit";
import Conditional from "./common/Conditional";
import NewsItemDetails from "./edit/NewsItemDetails";
import NewsItemDetailsEdit, {FormData} from "./edit/NewsItemDetailsEdit";
import {useToggle} from "./utils/hooks";
import clientAPI from "../data/clientAPI";
import {useRouter} from "next/router";

export default function Article({item}: {item: NewsItem}) {
    const router = useRouter();
    const [editMode, toggleEditMode] = useToggle(item.title.length === 0);

    const handleEdit = ({title, details}: FormData) => {
        clientAPI.update(item.id, title, details).then(router.reload);
    }

    return (
        <>
            <NavigationTab onEdit={toggleEditMode} />
            <MDBContainer className="pt-2">
                <Conditional tester={editMode}>
                    <NewsItemDetailsEdit item={item} onEdited={handleEdit} />
                    <NewsItemDetails item={item} />
                </Conditional>
            </MDBContainer>
        </>
    )
}
