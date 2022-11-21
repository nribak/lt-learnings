import {MDBContainer} from "mdb-react-ui-kit";
import PictureSearch from "./PictureSearch";
import {PixabayHit, PixabayInput, requestImages} from "../pixabay.api";
import ImageGrid from "./ImageGrid";
import {createContext, ReactNode, useState} from "react";
import Conditional from "./common/Conditional";


export interface Theme {
    value: 'light'|'dark'
}
const initialThemeValue: Theme = {value: 'light'}
export const ThemeContext = createContext<Theme>(initialThemeValue);

function ThemeContextProvider(props: {initialValue: Theme, children: ReactNode}) {

    return (
        <ThemeContext.Provider value={props.initialValue}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default function App() {

    const [images, setImages] = useState<PixabayHit[]>([]);

    const handleQuerySubmit = (input: PixabayInput) => {
        requestImages(input).then((hits) => {
            setImages(hits);
        });
    }


    return (
        <ThemeContextProvider initialValue={initialThemeValue}>
            <MDBContainer className="pt-2">
                <PictureSearch onQuerySubmit={handleQuerySubmit}/>
                <hr/>
                <Conditional condition={images.length > 0}>
                    <ImageGrid hits={images} />
                    <div className="h3">No Pictures Yet</div>
                </Conditional>
            </MDBContainer>
        </ThemeContextProvider>
    )
}
