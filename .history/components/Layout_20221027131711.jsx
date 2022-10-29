import styles from '../styles/components/Layout.module.scss'
import {useMenuOpen,useMenuOpDispatch} from '../context/MenuOpenContext'

import SideMenu from './SideMenu.jsx'
import Header from './Header'

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