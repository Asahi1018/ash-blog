import SideMenu from './sideMenu'
import {styles} from '../styles/components/layout.module'
import {ç} from '../context/MenuOpenContext'

const Layout =  ({children}) => {
    const useMenuOpen = use 
    return (
        <div className="container">
        <SideMenu/>
        <main styles={}>{children}</main>
        </div>

    )
};

export default Layout;