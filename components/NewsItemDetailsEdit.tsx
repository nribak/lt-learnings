import {NewsItem} from "../data/models";
import {MDBBtn, MDBInput, MDBTextArea} from "mdb-react-ui-kit";
import {useForm} from "./utils/hooks";
import {FormEvent} from "react";

export interface FormData {
    title: string,
    details: string
}

export default function NewsItemDetailsEdit({item, onEdited}: {item: NewsItem, onEdited: (formData: FormData) => void}) {
    const [state, onChange] = useForm<FormData>({title: item.title ?? '', details: item.details ?? ''});

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        onEdited(state);
    }

    return (
        <form onSubmit={handleSubmit}>
            <MDBInput type="text" label="title" name="title" className="mt-3" value={state.title} onChange={onChange}/>
            <MDBTextArea label="details" rows={5} name="details" className="mt-3" value={state.details} onChange={onChange} />
            <MDBBtn block type="submit" className="mt-3">Save</MDBBtn>
        </form>
    )
}
