import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

const PubTime = ({pubTime}) => {
    const utcDate = pubTime;
    const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
    const jstString = format(jstDate, 'yyyy-MM-dd')
    return (
        <time dateTime={jstString}>{jstString}</time>
    )
}

export default PubTime;