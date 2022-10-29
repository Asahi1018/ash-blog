import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import styles from './Time.module.scss'

const Time = ({pubTime,updateTime}) => {
    const SetTime = (time) => {
        const utcDate = time;
        const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo')
        const jstString = format(jstDate, 'yyyy/MM/dd')
        return jstString
    }
   
    return (
        <div className={styles.timeContainer}>
            <time className={styles.time} dateTime={SetTime(pubTime)}>{SetTime(pubTime)}</time>
            
            <time className={styles.time} dateTime={SetTime(updateTime)}>更新日({SetTime(updateTime)})</time>
        </div>
    )
}

export default Time;