import styles from './Layout.module.scss'
import {useMenuOpen,useMenuOpDispatch} from '../../context/MenuOpenContext'

import SideMenu from '../SideMenu/SideMenu'
import Header from '../Header/Header'
import Head from 'next/head'

const Layout =  ({children}) => {
    const menuOpen = useMenuOpen(); 
    const dispatch = useMenuOpDispatch();
    return (
        <>
            <Head>
                <link key='font1' rel="preconnect" href="https://fonts.googleapis.com" />
                <link key='font2' rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500&display=swap" rel="stylesheet"/>
            </Head>
            <SideMenu/>
            <Header/>
            <div onClick={() => {
                menuOpen && dispatch();}} 
                className={menuOpen ? styles.mask : undefined}>
            </div>
            <div className={styles.main}>{children}</div>
        </>

    )
};

export default Layout;