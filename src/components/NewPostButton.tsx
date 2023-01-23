import {useAppDispatch} from "../redux/store";
import {addPostThunk} from "../redux/summaries.slice";

export default function NewPostButton() {
    const dispatch = useAppDispatch();
    const handleClick = () => {
        dispatch(addPostThunk());
    }
    return (
        <div onClick={handleClick}>
            Create new post
        </div>
    )
}
