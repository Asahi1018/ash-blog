import styles from './AppHome.module.scss'

export default function AppHome () {
    return (
    <>
        <div className={styles.title_container}>
            <h1 className={styles.h1}>
                {'Welcome to\nAsh Web App! \nHello World!'}
                
            </h1>
        </div> 
    </>
    )

}