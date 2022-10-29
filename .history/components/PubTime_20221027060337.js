import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

const PubTime = ({pubTime}) => {
    const utcDate = new Date('2000-01-01T00:00:00')
    return (
        <time dateTime={pubTime}>{pubTime}</time>
    )
}

export default PubTime;