import {Post} from "../api-helpers/models";
import {MDBBtn, MDBInput, MDBTextArea} from "mdb-react-ui-kit";
import {useForm} from "../utils/hooks";
import {FormEvent} from "react";
import clientApi from "../api-helpers/client.api";
import {useRouter} from "next/router";

export default function PostEdit({post}: {post: Post}) {
    const router = useRouter();

    const [state, onChange] = useForm<Post>({...post});

    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        clientApi.updatePost(post.id, state.title, state.details).then(res => {
            // router.reload();
            router.replace('/');
        })
    }

    return (
        <form className="d-grid gap-2" onSubmit={handleSubmit}>
            <MDBInput label="title" name="title" value={state.title} onChange={onChange}/>
            <MDBTextArea label="details" rows={15} name="details" value={state.details} onChange={onChange}/>
            <MDBBtn type="submit">Save</MDBBtn>
        </form>
    )
}
