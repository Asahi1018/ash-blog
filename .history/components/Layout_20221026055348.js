import SideMenu from './sideMenu'
import {styles} from '../styles/components/layout.module.scss'
import {useMenuOpen} from '../context/MenuOpenContext'

const Layout =  ({children}) => {
    const menuOpen = useMenuOpen(); 
    return (
        <div className="container">
        <SideMenu/>
        <main styles={menuOpen ? styles.mask : "undifined }>{children}</main>
        </div>

    )
};

export default Layout;