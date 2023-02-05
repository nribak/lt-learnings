import CounterButton from "./CounterButton";
import CounterValue from "./CounterValue";
import {useCallback, useMemo, useState} from "react";
import {MDBContainer} from "mdb-react-ui-kit";


export default function Counter() {

    const [value, setValue] = useState(0);

    const findDiff = (): {diff: number} => {
        //calculate heavy calc...
        return {diff: 2};
    }

    const diff = useMemo(findDiff, []);

    const increase = useCallback(() => {
        setValue(prevState => prevState + diff.diff);
    }, [diff]);

    const decrease = useCallback(() => {
        setValue(prevState => prevState - diff.diff);
    }, [diff]);

    console.log('counter app')

    return (
        <MDBContainer>
            <div className="d-flex justify-content-around align-content-center mt-2">
                <CounterButton text="-" onClick={decrease} />
                <CounterValue value={value} />
                <CounterButton text="+" onClick={increase} />
            </div>
        </MDBContainer>
    )
}
