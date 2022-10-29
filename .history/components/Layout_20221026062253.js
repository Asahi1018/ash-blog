import SideMenu from './SideMenu'
import {styles} from '../styles/components/Layout.module.scss'
import {useMenuOpen} from '../context/MenuOpenContext'

const Layout =  ({children}) => {
    const menuOpen = useMenuOpen(); 
    return (
        <div className="container">
        <SideMenu/>
        <main styles={{bac} }>{children}</main>
        </div>

    )
};

export default Layout;