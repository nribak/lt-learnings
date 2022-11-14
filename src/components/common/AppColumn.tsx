import {ReactNode} from "react";
import {MDBCol} from "mdb-react-ui-kit";

export default function AppColumn({children}: {children: ReactNode}) {

    return (
        <MDBCol size={12} sm={6} md={3} className="d-flex align-items-center">
            {children}
        </MDBCol>
    )
}
