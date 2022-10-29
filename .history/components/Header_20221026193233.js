import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'
import {useMenuOpen} from '../context/MenuOpenContext'
const Header = () => {
    const MenuOpen =useMenuOpen();
    return (
        <header className={styles.header}>
             <button className={`${styles.btn} ${openMenu ? styles.open : undefined}`} onClick={() => dispatch()}>
                <span className={styles.btnSpan}></span>
                <span className={styles.btnSpan}></span>
                <span className={styles.btnSpan}></span>
            </button>
            <Link href="/"><h1 className={styles.title}>Ash Blog</h1></Link>
        </header>
    )

}

export default Header;