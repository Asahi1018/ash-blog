import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

const Time = ({pubTime,updateTime}) => {
    const utcDates = [pubTime,updateTime];
    const jstDates = utcDates.forEach(utcDate => {
        utcToZonedTime(utcDate, 'Asia/Tokyo');
    }).forEach(jstDate => {
        
    })
    const jstString = format(jstDates, 'yyyy/MM/dd')
    return (
        <>
            <time dateTime={jstString}>{jstString}</time>
            <span>更新日</span>
            <time  dateTime={jstString}>【{jstString}】</time>
        </>
    )
}

export default Time;