import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'


const UpdateTime = ({updateTime}) => {
    return(
        <time  dateTime={updateTime}>【{updateTime}】</time>
    )
}

export default UpdateTime;