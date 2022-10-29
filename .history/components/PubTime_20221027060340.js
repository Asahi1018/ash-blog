import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

const PubTime = ({pubTime}) => {
    const utcDate = 
    return (
        <time dateTime={pubTime}>{pubTime}</time>
    )
}

export default PubTime;