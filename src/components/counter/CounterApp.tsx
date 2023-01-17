import CounterButton from "./CounterButton";
import CounterValue from "./CounterValue";
import {useCallback, useMemo, useState} from "react";
import {MDBContainer} from "mdb-react-ui-kit";


function incremental() {
    // requires a lot of calculating 10_000ms
    console.log('incremental');
    return 10;
}


export default function CounterApp() {
    const [state, setState] = useState(0);

    const someValue = useMemo(() => incremental(), []);
    // const someValue = incremental();
    const handleDecrement = useCallback(() => {
        setState(prevState => prevState - someValue);
    }, [someValue]);


    const handleIncrement = useCallback(() => {
        setState(prevState => prevState + someValue);
    }, [someValue]);


    console.log('counter app');

    return (
        <MDBContainer>
            <div className="d-flex justify-content-between align-items-center">
                <CounterButton text="-" onClick={handleDecrement} />
                <CounterValue value={state} />
                <CounterButton text="+" onClick={handleIncrement} />
            </div>
        </MDBContainer>
    )
}
