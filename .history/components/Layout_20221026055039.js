import SideMenu from './sideMenu'
import {styles} from '../styles/components/layout.module'
import

const Layout =  ({children}) => {
    const 
    return (
        <div className="container">
        <SideMenu/>
        <main styles={}>{children}</main>
        </div>

    )
};

export default Layout;