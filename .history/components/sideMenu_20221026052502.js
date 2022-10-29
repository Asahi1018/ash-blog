import {useState} from 'react'
import styles from '../styles/sideMenu.module.scss'
import Link from 'next/link'
const SideMenu = () => {
  
    return (
        <>
            <button className={`${styles.btn} ${openMenu ? styles.open :""}`} onClick={() => menuHander()}>
                <span className={styles.btnSpan}></span>
                <span className={styles.btnSpan}></span>
                <span className={styles.btnSpan}></span>
            </button>
        <aside className={`${styles.aside} ${openMenu ? styles.open :""} `}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                <li className={styles.li}><Link href="/">Home</Link></li>
                <li className={styles.li}><Link href="/blog">Blog</Link></li>
                <li className={styles.li}>list3</li>
                <li className={styles.li}>list4</li>
                <li className={styles.li}>list5</li>
                </ul>
            </nav>
        </aside>
        <div className={`${styles.mask} ${openMenu ? styles.open: ""}`} onClick={() => menuHander}></div>
        
        </>
    )
}

export default SideMenu;