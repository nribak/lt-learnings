import {ChangeEvent, useEffect, useState} from "react";

export function useForm<T>(initValue: T): [T, (ev: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void] {
    const [state, setState] = useState(initValue);

    const onChange = (ev: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {name, value} = ev.currentTarget;
        setState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }
    return [state, onChange];
}

export function useResource<T>(fetcher: () => Promise<T>): T|null {
    const [state, setState] = useState<T|null>(null);

    useEffect(() => {
        fetcher().then(res => setState(res));
    }, [fetcher])

    return state;
}
