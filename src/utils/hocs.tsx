import {FunctionComponent} from "react";
import {Store} from "redux";
import {Provider} from "react-redux";

export const withRedux =<P extends {}> (Component: FunctionComponent<P>, store: Store) => {
    const newComponent: FunctionComponent<P> = (props: P) => {

        return (
            <Provider store={store}>
                <Component {...props}/>
            </Provider>
        )
    }
    return newComponent;
}
