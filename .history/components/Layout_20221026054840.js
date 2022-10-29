import SideMenu from './sideMenu'



const Layout =  ({children}) => {
    return (
        <div className="container">
        <SideMenu/>
        <main>{children}</main>
        </div>

    )
};

export default Layout;