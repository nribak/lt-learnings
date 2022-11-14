import {PixabayHit} from "../pixabay.api";
import {MDBRow} from "mdb-react-ui-kit";
import AppColumn from "./common/AppColumn";

export default function ImageGrid({hits}: {hits: PixabayHit[]}) {
    console.log('render image grid');
    return (
        <MDBRow>
            {hits.map(hit => {
                return (
                    <AppColumn key={hit.id}>
                        <img
                            src={hit.webformatURL}
                            className='img-thumbnail'
                            alt={hit.tags}
                        />
                    </AppColumn>
                )
            })}
        </MDBRow>
    )
}
