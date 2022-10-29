import SideMenu from './sideMenu'
import {styles} from '../styles/components/layout.module'
import {} from '../context/MenuOpenContext'

const Layout =  ({children}) => {
    const useMenuOpen =  
    return (
        <div className="container">
        <SideMenu/>
        <main styles={}>{children}</main>
        </div>

    )
};

export default Layout;