const Layout =  ({children}) => {
    return (
        <div id="">
        <aside>
            <nav>
                <ul>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
                <li>list4</li>
                <li>list5</li>
                </ul>
            </nav>
        </aside>
        <main>{children}</main>
        </div>

    )
};

export default Layout;