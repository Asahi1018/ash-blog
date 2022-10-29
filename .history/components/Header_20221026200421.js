import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'
import {useMenuOpen,useMenuOpDispatch} from '../context/MenuOpenContext'
const Header = () => {
    const openMenu = useMenuOpen();
    const dispatch = useMenuOpDispatch();
    return (
        <header className={styles.header}>
            <button className={`${styles.btn} ${openMenu ? styles.open : undefined}`} onClick={() => dispatch()}>
                <span className={styles.btnSpan}></span>
                <span className={styles.btnSpan}></span>
                <span className={styles.btnSpan}></span>
            </button>
            <Link href="/">< className={styles.title}>Ash Blog</Link>
        </header>
    )

}

export default Header;