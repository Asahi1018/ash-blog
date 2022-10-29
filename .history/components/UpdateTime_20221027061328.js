import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'


const UpdateTime = ({UpdateTime}) => {
    return(
        <time  dateTime={UpdateTime}>【{UpdateTime}】</time>
    )
}

export default UpdateTime;