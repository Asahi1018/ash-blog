import styles from './Layout.module.scss'
import {useMenuOpen,useMenuOpDispatch} from '../context/MenuOpenContext'

import SideMenu from './SideMenu'
import Header from './Header/Header'

const Layout =  ({children}) => {
    const menuOpen = useMenuOpen(); 
    const dispatch = useMenuOpDispatch();
    return (
        <div className="container">
            <SideMenu/>
            <Header/>
            <div onClick={() => {
                menuOpen && dispatch()
                }} className={menuOpen ? styles.mask : undefined}>

                <div className={styles.main}>{children}</div>

            </div>
        </div>

    )
};

export default Layout;