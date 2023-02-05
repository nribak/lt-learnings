export default function CounterValue(props: {value: number}) {

    console.log('value', props.value);
    return (
        <span className="fs-4">
            {props.value}
        </span>
    )
}
