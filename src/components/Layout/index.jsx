import styles from './Layout.module.scss'
import {useMenuOpen,useMenuOpDispatch} from 'src/context/MenuOpenContext'

import SideMenu from 'src/components/SideMenu'
import Header from 'src/components/Header'

const Layout =  ({children}) => {
    const menuOpen = useMenuOpen(); 
    const dispatch = useMenuOpDispatch();
    return (
        <div className={styles.global_container}>
            <SideMenu/>
            <Header/>
            <div onClick={() => {
                menuOpen && dispatch();}} 
                className={menuOpen ? styles.mask : undefined}>
            </div>
            <div className={styles.main}>{children}</div>
            
            
        </div>

    )
};

export default Layout;