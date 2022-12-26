import {ChangeEvent, useState} from "react";

export function useForm<T>(initValue: T): [T, (ev: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void] {
    const [state, setState] = useState(initValue);

    const onChange = (ev: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {name, value} = ev.currentTarget;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));

        // setState(prevState => {
        //     return {
        //         ...prevState,
        //         [name]: value
        //     }
        // })

    }
    return [state, onChange];
}
