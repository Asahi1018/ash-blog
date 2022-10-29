import styles from './AppHome.module.scss'

export default function AppHome () {
    return (
    <>
        <div className={styles.containerDiv}>
            <h1 className={styles.h1}>
                {'Welcome to\nAsh Web App!'}
            </h1>
        </div> 
    </>
    )

}