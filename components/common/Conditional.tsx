import {Children, ReactNode} from "react";

export default function Conditional({tester, children}: {tester: boolean, children: ReactNode}) {
    const [first, second] = Children.toArray(children);
    return (
        <>
            {tester ? first : second}
        </>
    )
}
