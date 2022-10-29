import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

export default function Time {



    const SetTime = (time) => {
        const utcDate = time;
        const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo')
    } ({pubTime,updateTime}) => {
        const jstString = format(jstDate, 'yyyy/MM/dd')
        return jstString
    }
   
    return (
        <>
            <time dateTime={SetTime(pubTime)}>{SetTime(pubTime)}</time>
            <span>更新日</span>
            <time  dateTime={SetTime(updateTime)}>【{SetTime(updateTime)}】</time>
        </>
    )
}

 