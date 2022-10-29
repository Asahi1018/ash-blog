import SideMenu from './sideMenu'
import {styles} from '../styles/components/layout.module'


const Layout =  ({children}) => {
    
    return (
        <div className="container">
        <SideMenu/>
        <main styles={}>{children}</main>
        </div>

    )
};

export default Layout;