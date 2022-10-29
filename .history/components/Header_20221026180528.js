import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'
const Header = () => {
    return (
        <header style=>
            <Link href="/"><h1>Ash Blog</h1></Link>
        </header>
    )

}

export default Header;