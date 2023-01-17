import {MDBBtn} from "mdb-react-ui-kit";
import {memo} from "react";

function CounterButton({text, onClick}: {text: string, onClick: () => void}) {

    console.log('button', text);

    return (
        <MDBBtn onClick={onClick}>{text}</MDBBtn>
    )
}


export default memo(CounterButton);
