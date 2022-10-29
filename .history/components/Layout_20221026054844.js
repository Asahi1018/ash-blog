import SideMenu from './sideMenu'
import second from '../'


const Layout =  ({children}) => {
    return (
        <div className="container">
        <SideMenu/>
        <main>{children}</main>
        </div>

    )
};

export default Layout;