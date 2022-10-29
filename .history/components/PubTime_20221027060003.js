const PubTime = () => {
    return (
        <time className={styles.time} dateTime={blog.publishedAt}>{blog.publishedAt}</time>
    )
}

export default PubTime;