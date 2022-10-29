import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'
const Header = () => {
    return (
        <header className={styles.header}>
            <Link href="/"><h1 className={styles.title}>Ash Blog</h1></Link>
        </header>
    )

}

export default Header;