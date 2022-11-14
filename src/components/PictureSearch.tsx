import {MDBBtn, MDBInput} from "mdb-react-ui-kit";
import {useInput} from "../hooks";
import {FormEvent, useState} from "react";
import CategoriesRadioGroup from "./CategoriesRadioGroup";
import {PixabayInput} from "../pixabay.api";

const categories = ["backgrounds", "fashion", "nature", "science", "education", "feelings", "health", "people", "religion", "places", "animals", "industry", "computer", "food", "sports", "transportation", "travel", "buildings", "business", "music"]

export default function PictureSearch(props: {onQuerySubmit: (input: PixabayInput) => void}) {
    const [text, changeText] = useInput('');
    const [category, setCategory] = useState<string|undefined>(undefined);

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        props.onQuerySubmit({q: text, category});
    }

    return (
        <form onSubmit={handleSubmit}>
            <MDBInput
                label="Query"
                type="text"
                className="mb-2"
                value={text}
                onChange={changeText}
            />
            <CategoriesRadioGroup categories={categories} onCategoryChange={setCategory} selectedCategory={category}/>
            <MDBBtn block type="submit">Submit</MDBBtn>
        </form>
    )
}
