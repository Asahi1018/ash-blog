import styles from './Layout.module.scss'
import {useMenuOpen,useMenuOpDispatch} from '../../context/'

import SideMenu from '../SideMenu/SideMenu'
import Header from '../Header/Header'

const Layout =  ({children}) => {
    const menuOpen = useMenuOpen(); 
    const dispatch = useMenuOpDispatch();
    return (
        <>
            <SideMenu/>
            <Header/>
            <div onClick={() => {
                menuOpen && dispatch()
                }} className={menuOpen ? styles.mask : undefined}>
                <div className={styles.main}>{children}</div>

            </div>
        </>

    )
};

export default Layout;