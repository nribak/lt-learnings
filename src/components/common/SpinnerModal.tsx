import {
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalHeader,
    MDBModalTitle,
    MDBSpinner
} from "mdb-react-ui-kit";

export default function SpinnerModal({show}: {show: boolean}) {

    return (
        <MDBModal show={show}>
            <MDBModalDialog>
                <MDBModalContent>
                    <MDBModalHeader>
                        <MDBModalTitle>Loading...</MDBModalTitle>
                    </MDBModalHeader>
                    <MDBModalBody className="d-flex justify-content-center">
                        <MDBSpinner role='status'>
                            <span className='visually-hidden'>Loading...</span>
                        </MDBSpinner>
                    </MDBModalBody>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>
    )
}
