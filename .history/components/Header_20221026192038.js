import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'
const Header = () => {
    return (
        <section className={styles.ul}>
            <Link href="/"><h1>Ash Blog</h1></Link>
        </section>
    )

}

export default Header;