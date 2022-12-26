import clientApi from "../api-helpers/client.api";
import {useRouter} from "next/router";

export default function NewPostButton() {
    const router = useRouter();
    const handleClick = () => {
        clientApi.createPost('', '').then(post => {
            router.push(`posts/${post.id}`);
        })
    }
    return (
        <div onClick={handleClick}>
            Create new post
        </div>
    )
}
