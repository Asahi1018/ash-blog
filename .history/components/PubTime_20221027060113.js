const PubTime = (pubTime) => {
    return (
        <time className={styles.time} dateTime={pubTime}>{pubTime}</time>
    )
}

export default PubTime;