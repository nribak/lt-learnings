import {Children, ReactNode} from "react";

export default function Conditional({condition, children}: {condition: boolean, children: ReactNode}) {
    const [trueElement, falseElement] = Children.toArray(children);
    return (
       <>
           {condition ? trueElement : falseElement}
       </>
    )
}
