import {MDBSpinner} from "mdb-react-ui-kit";

export default function PageSpinner() {

    return (
        <div className="page-spinner d-flex justify-content-center align-items-center bg-transparent">
            <MDBSpinner role='status' size="lg"/>
            <div className="mx-2 app-font-bold">Loading...</div>
        </div>
    )
}
