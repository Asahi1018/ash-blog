import SideMenu from './sideMenu'
import {styles} from '../styles/components/layout.module'
import {use} from '../context/MenuOpenContext'

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