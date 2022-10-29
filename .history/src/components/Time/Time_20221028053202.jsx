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
        <>
            <time className={styles.time} dateTime={SetTime(pubTime)}>{SetTime(pubTime)}</time>
            <span>更新日</span>
            <time className={styles.time} dateTime={SetTime(updateTime)}>【{SetTime(updateTime)}】</time>
        </>
    )
}

export default Time;