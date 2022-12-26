import {MDBCheckbox, MDBContainer, MDBNavbar} from "mdb-react-ui-kit";
import {ChangeEvent} from "react";

export default function TopNav({isEditMode, setEditMode}: {isEditMode: boolean, setEditMode: (value: boolean) => void}) {

    const handleCheckChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const isChecked = ev.currentTarget.checked;
        setEditMode(isChecked);
    }

    return (
        <MDBNavbar>
            <MDBContainer>
                <MDBCheckbox label="Edit Mode" checked={isEditMode} onChange={handleCheckChange}/>
            </MDBContainer>
        </MDBNavbar>
    )
}
