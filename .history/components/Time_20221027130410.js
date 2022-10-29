import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

const Time = ({pubTime,updateTime}) => {
    const utcDates = [pubTime,updateTime];
    const jstDates = utcDates.forEach(utcDate => {
        utcToZonedTime(utcDate, 'Asia/Tokyo');
    })
    console.log(jstDates);
    const jstStrings = jstDates.forEach(jstDate => {
         format(jstDate, 'yyyy/MM/dd')
    })

    
    return (
        <>
            <time dateTime={jstStrings[0]}>{jstStrings[0]}</time>
            <span>更新日</span>
            <time  dateTime={jstString[1]}>【{jstString[1]}】</time>
        </>
    )
}

export default Time;