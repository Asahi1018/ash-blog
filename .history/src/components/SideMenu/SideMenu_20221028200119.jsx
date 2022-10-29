import styles from './SideMenu.module.scss'
import Link from 'next/link'
import {useMenuOpen,useMenuOpDispatch} from '../../context/MenuOpenContext'
const SideMenu = () => {
    const openMenu = useMenuOpen();
    const dispatch = useMenuOpDispatch();
    return (
        <aside className={`${styles.aside} ${openMenu ? styles.open : undefined} `}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                <li className={styles.li_1}><Link href="/"><a onClick={() => dispatch()}>Home</a></Link></li>
                <li className={styles.li_2}><Link href="/posts"><a onClick={() => dispatch()}>Blog</a></Link></li>
                <li className={styles.li_3}>list3</li>
                <li className={styles.li_4}>list4</li>
                <li className={styles.li_5}>list5</li>
                </ul>
            </nav>
        </aside>
        
    )
}

export default SideMenu;