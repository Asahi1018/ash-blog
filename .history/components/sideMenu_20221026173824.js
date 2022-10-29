import styles from '../styles/components/SideMenu.module.scss'
import Link from 'next/link'
import {useMenuOpen,useMenuOpDispatch} from '../context/MenuOpenContext'
const SideMenu = () => {
    const openMenu = useMenuOpen();
    const dispatch = useMenuOpDispatch();
    return (
        <>
            <button className={`${styles.btn} ${openMenu ? styles.open : undefined}`} onClick={() => dispatch()}>
                <span className={styles.btnSpan}></span>
                <span className={styles.btnSpan}></span>
                <span className={styles.btnSpan}></span>
            </button>
        <aside className={`${styles.aside} ${openMenu ? styles.open : undefined} `}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                <li className={styles.li}><Link href="/"><a onClick={() => dispatch()}>Home</a></Link></li>
                <li className={styles.li}><Link href="/posts/95jzsofm-2">Blog</Link></li>
                <li className={styles.li}>list3</li>
                <li className={styles.li}>list4</li>
                <li className={styles.li}>list5</li>
                </ul>
            </nav>
        </aside>
        </>
    )
}

export default SideMenu;