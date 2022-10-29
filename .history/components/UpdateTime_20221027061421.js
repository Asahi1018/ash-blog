import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'


const UpdateTime = ({updateTime}) => {
    const utcDate = pubTime;
    const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
    const jstString = format(jstDate, 'yyyy/MM/dd')
    return(
        <time  dateTime={updateTime}>【{updateTime}】</time>
    )
}

export default UpdateTime;