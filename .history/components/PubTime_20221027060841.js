import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

const PubTime = ({pubTime}) => {
    const utcDate = pubTime;
    const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
    const jstString = format(jstDate, 'yyyy/MM/dd')
    return (
        <time dateTime={jstString}>{jstString}</time>
    )
}

export default PubTime;

import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

const utcDate = new Date('2000-01-01T00:00:00')
//=> 2000-01-01T00:00:00.000Z

const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo')
//=> 2000-01-01T09:00:00.000Z

const jstString = format(jstDate, 'yyyy-MM-dd HH:mm:ss')
//=> "2000-01-01 09:00:00"