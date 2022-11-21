import {MDBBtn, MDBInput} from "mdb-react-ui-kit";
import {ChangeEvent, FormEvent, useReducer} from "react";
import CategoriesRadioGroup from "./CategoriesRadioGroup";
import {PixabayInput} from "../pixabay.api";
import formReducer from "../form.reducer";

const categories = ["backgrounds", "fashion", "nature", "science", "education", "feelings", "health", "people", "religion", "places", "animals", "industry", "computer", "food", "sports", "transportation", "travel", "buildings", "business", "music"]

export default function PictureSearch(props: {onQuerySubmit: (input: PixabayInput) => void}) {
    const [state, dispatch] = useReducer(formReducer, {query: ''});

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        props.onQuerySubmit({q: state.query, category: state?.category});
    }

    const handleTextChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const query = ev.currentTarget.value;
        dispatch({type: 'set_query', payload: query});
    }

    const handleCategoryChange = (category: string) => {
        dispatch({type: 'change_category', payload: category});
    }

    return (
        <form onSubmit={handleSubmit}>
            <MDBInput
                label="Query"
                type="text"
                className="mb-2"
                value={state.query}
                onChange={handleTextChange}
            />
            <CategoriesRadioGroup categories={categories} onCategoryChange={handleCategoryChange} selectedCategory={state.category}/>
            <MDBBtn block type="submit">Submit</MDBBtn>
        </form>
    )
}
