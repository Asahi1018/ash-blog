import styles from '../styles/components/SideMenu.module.scss'
import Link from 'next/link'
import {useMenuOpen,useMenuOpDispatch} from '../context/MenuOpenContext'
const SideMenu = () => {
    const openMenu = useMenuOpen();
    const dispatch = useMenuOpDispatch();
    return (
        <>
           
        <aside className={`${styles.aside} ${openMenu ? styles.open : undefined} `}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                <li className={styles.li}><Link href="/"><a onClick={() => dispatch()}>Home</a></Link></li>
                <li className={styles.li}><Link href="/posts/95jzsofm-2"><a onClick={() => dispatch()}>Blog 最初</a></Link></li>
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