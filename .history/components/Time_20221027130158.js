import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

const Time = ({pubTime,updateTime}) => {
    const utcDates = [pubTime,updateTime];
    const jstDates = utcDates.forEach(utcDate => {
        utcToZonedTime(utcDate, 'Asia/Tokyo');
    })
    
    const jstStrings = jstDates.forEach(jstDate => {
         format(jstDate, 'yyyy/MM/dd')
    })

    
    return (
        <>
            <time dateTime={jstStrings[0]}>{jstStrings[1]}</time>
            <span>更新日</span>
            <time  dateTime={jstString}>【{jstString}】</time>
        </>
    )
}

export default Time;