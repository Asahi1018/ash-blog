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
            menuOpen && dispatch()
        }} className={menuOpen ? styles.mask : styles.unMask}>
        </div>
        <main>{children}</main>
        </div>

    )
};

export default Layout;