import styles from '../styles/components/Layout.module.scss'
import {useMenuOpen,useMenuOpDispatch} from '../context/MenuOpenContext'

import SideMenu from './SideMenu'
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

                <>{children}</>

            </div>
        </div>

    )
};

export default Layout;