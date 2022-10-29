const PubTime = (pubTime) => {
    return (
        <time className={styles.time} dateTime={.publishedAt}>{blog.publishedAt}</time>
    )
}

export default PubTime;