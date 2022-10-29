const PubTime = (pubTime) => {
    return (
        <time className={styles.time} dateTime={pubTime}>{blog.publishedAt}</time>
    )
}

export default PubTime;