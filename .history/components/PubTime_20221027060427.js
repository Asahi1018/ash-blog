import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

const PubTime = ({pubTime}) => {
    const utcDate = pubTime;
    const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
    const jstString = format(jstDate, 'yyyy-MM-dd HH:mm:ss')
    return (
        <time dateTime={pubTime}>{pubTime}</time>
    )
}

export default PubTime;