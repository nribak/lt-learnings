import {ReactNode} from "react";
import {MDBCol} from "mdb-react-ui-kit";

export default function AppCol(props: {children: ReactNode}) {

    return (
        <MDBCol size={12} sm={6} md={4} lg={3} className="mt-2">
            {props.children}
        </MDBCol>
    )
}
