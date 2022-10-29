import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

const Time = ({pubTime,updateTime}) => {
    const SetTime = (time) => {
        console.log(utcDate);
        const utcDate = time;
        const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo')
        const jstString = format(jstDate, 'yyyy/MM/dd')
    }
   
    //=> "2000-01-01 09:00:00"


    return (
        <>
            <time dateTime={SetTime(pubTime)}>{SetTime(pubTime)}</time>
            <span>更新日</span>
            <time  dateTime={SetTime(updateTime)}>【{SetTime(updateTime)}】</time>
        </>
    )
}

export default Time;