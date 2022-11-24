import dateHelper from 'date-and-time';

const pattern = 'DD/MM/YYYY HH:mm';

export default function LastUpdatedText({time}: {time: number}) {
    const timeStamp = new Date(time);

    return <small className='text-muted'>{dateHelper.format(timeStamp, pattern)}</small>;
}
