import SideMenu from './sideMenu'
import {styles} from '../styles/components/layout.module'
import {useMenuOpen} from '../context/MenuOpenContext'

const Layout =  ({children}) => {
    const menuOpen = useMenuOpen(); 
    return (
        <div className="container">
        <SideMenu/>
        <main styles={menuOpen ? styles.}>{children}</main>
        </div>

    )
};

export default Layout;