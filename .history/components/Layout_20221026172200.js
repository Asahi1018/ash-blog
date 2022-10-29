import SideMenu from './SideMenu'
import styles from '../styles/components/Layout.module.scss'
import {useMenuOpen,useMenuOpDispatch} from '../context/MenuOpenContext'

const Layout =  ({children}) => {
    const menuOpen = useMenuOpen(); 
    const dispatch = useMenuOpDispatch();
    return (
        <div className="container">
        <SideMenu/>
        <div onClick={() => {
            menuOpen 
        }} className={menuOpen ? styles.mask : styles.unMask}>
        <main>{children}</main>
        </div>
        </div>

    )
};

export default Layout;