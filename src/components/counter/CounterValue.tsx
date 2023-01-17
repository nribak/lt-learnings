export default function CounterValue({value}: {value: number}) {

    console.log('counter value', value);
    return (
        <span className="fs-4">
            {value}
        </span>
    )
}
