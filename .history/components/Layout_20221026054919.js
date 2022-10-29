import SideMenu from './sideMenu'
import {second} from '../styles/components/layout.module'


const Layout =  ({children}) => {
    return (
        <div className="container">
        <SideMenu/>
        <main>{children}</main>
        </div>

    )
};

export default Layout;