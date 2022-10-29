import SideMenu from './SideMenu'
import {styles} from '../styles/components/SideMenu.module.scss'
import {useMenuOpen} from '../context/MenuOpenContext'

const Layout =  ({children}) => {
    const menuOpen = useMenuOpen(); 
    return (
        <div className="container">
        <SideMenu/>
        <main styles={menuOpen ? styles. : undefined }>{children}</main>
        </div>

    )
};

export default Layout;