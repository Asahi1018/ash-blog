import SideMenu from './SideMenu'
import styles from '../styles/components/Layout.module.scss'
import {useMenuOpen,useMenuOpDispatch} from '../context/MenuOpenContext'

const Layout =  ({children}) => {
    const menuOpen = useMenuOpen(); 
    return (
        <div className="container">
        <SideMenu/>
        <div onClick={() => } className={menuOpen ? styles.mask : undefined}></div>
        <main>{children}</main>
        </div>

    )
};

export default Layout;