import {FunctionComponent} from "react";

export interface WithLogProps {
    logText: string
}

export function withLog<P extends {}>(Component: FunctionComponent<P>): FunctionComponent<P & WithLogProps> {
    const NewComponent = function (props: P & WithLogProps): JSX.Element {
        const {logText, ...rest} = props;
        console.log(logText);
        return (
            <Component {...props} />
        )
    }

    return NewComponent;
}
