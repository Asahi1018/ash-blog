import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

const Time = ({pubTime,updateTime}) => {
    onst utcDate = new Date('2000-01-01T00:00:00')
    //=> 2000-01-01T00:00:00.000Z
    
    const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo')
    //=> 2000-01-01T09:00:00.000Z
    
    const jstString = format(jstDate, 'yyyy-MM-dd HH:mm:ss')
    //=> "2000-01-01 09:00:00"


    return (
        <>
            <time dateTime={jstStrings[0]}>{jstStrings[0]}</time>
            <span>更新日</span>
            <time  dateTime={jstString[1]}>【{jstString[1]}】</time>
        </>
    )
}

export default Time;