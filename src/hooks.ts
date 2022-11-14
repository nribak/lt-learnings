import {ChangeEvent, useState} from "react";

export function useInput(initialValue: string): [string, (ev: ChangeEvent<HTMLInputElement>) => void] {
    const [state, setState] = useState(initialValue);

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setState(ev.currentTarget.value);
    }

    return [state, handleChange];
}
export function useToggle(initValue: boolean): [boolean, () => void] {
    const [state, setState] = useState(initValue);
    const toggle = () => setState(prevState => !prevState);

    return [state, toggle];

}
