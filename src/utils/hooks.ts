import {ChangeEvent, useState} from "react";

export function useToggle(initValue: boolean): [boolean, () => void] {
    const [state, setState] = useState(initValue);
    const toggle = () => setState(prevState => !prevState);
    return [state, toggle];
}

export function useForm<T>(initValue: T): [T, (ev: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void] {
    const [state, setState] = useState(initValue);
    const onChange = (ev: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {name, value} = ev.currentTarget;
        setState(prevState => ({
            ...prevState, [name]: value
        }));
    }
    return [state, onChange];
}

export function useFile(): [File|undefined, (ev: ChangeEvent<HTMLInputElement>) => void] {
    const [state, setState] = useState<File|undefined>(undefined);
    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const file = ev.currentTarget.files?.item(0);
        if(file)
            setState(file);
    }

    return [state, handleChange];
}
