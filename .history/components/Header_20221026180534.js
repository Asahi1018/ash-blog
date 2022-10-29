import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'
const Header = () => {
    return (
        <header style={styles.header}>
            <Link href="/"><h1>Ash Blog</h1></Link>
        </header>
    )

}

export default Header;