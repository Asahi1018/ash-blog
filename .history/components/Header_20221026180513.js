import Link from 'next/link'
import styles from '../styles/components/SideMenu.module.scss'
const Header = () => {
    return (
        <header>
            <Link href="/"><h1>Ash Blog</h1></Link>
        </header>
    )

}

export default Header;