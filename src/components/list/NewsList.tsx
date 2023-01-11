import {NewsItem} from "../../data/models";
import {MDBRow} from "mdb-react-ui-kit";
import NewsSingleItem from "./NewsSingleItem";
import AppCol from "../common/AppCol";

export default function NewsList({data, onDelete}: {data: NewsItem[], onDelete: (id: string) => void}) {
    return (
        <MDBRow>
            {data.map(item => {
                return (
                    <AppCol key={item.id}>
                        <NewsSingleItem post={item} onDelete={onDelete} />
                    </AppCol>
                )
            })}
        </MDBRow>
    )
}
