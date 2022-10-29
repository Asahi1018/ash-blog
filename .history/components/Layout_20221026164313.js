import SideMenu from './SideMenu'
import styles from '../styles/components/Layout.module.scss'
import {useMenuOpen} from '../context/MenuOpenContext'

const Layout =  ({children}) => {
    const menuOpen = useMenuOpen(); 
    return (
        <div className="container">
        <SideMenu/>
        <div></div>
        <main styles={menuOpen ? styles.mask : styles.close}>{children}</main>
        </div>

    )
};

export default Layout;