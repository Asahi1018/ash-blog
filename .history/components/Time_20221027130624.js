import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

const Time = ({pubTime,updateTime}) => {
    const SetTime = (time) => {
        
    }
   
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