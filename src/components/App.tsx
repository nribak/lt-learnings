import {MDBContainer} from "mdb-react-ui-kit";
import PictureSearch from "./PictureSearch";
import {PixabayHit, PixabayInput, requestImages} from "../pixabay.api";
import ImageGrid from "./ImageGrid";
import {useState} from "react";
import Conditional from "./common/Conditional";


export default function App() {

    const [images, setImages] = useState<PixabayHit[]>([]);

    const handleQuerySubmit = (input: PixabayInput) => {
       requestImages(input).then((hits) => {
          setImages(hits);
       });
    }


    return (
        <MDBContainer className="pt-2">
            <PictureSearch onQuerySubmit={handleQuerySubmit}/>
            <hr/>
            <Conditional condition={images.length > 0}>
                <ImageGrid hits={images} />
                <div className="h3">No Pictures Yet</div>
            </Conditional>
        </MDBContainer>
    )
}
