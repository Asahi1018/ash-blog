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
            <SideMenu/>
            <Header/>
            <div onClick={() => {
                menuOpen && dispatch();}} 
                className={menuOpen ? styles.mask : undefined}>
            </div>
            <div className={styles.main}>{children}
            <p>dsa;ljf</p>
            <p>dsa;ljf</p>
            <p>dsa;ljf</p>
            <p>dsa;ljf</p>
            <p>dsa;ljf</p>
            <p>dsa;ljf</p>
            <p>dsa;ljf</p>
            <p>dsa;ljf</p>
            <p>dsa;ljf</p>
            <p>dsa;ljf</p>
            <p>dsa;ljf</p>
            <p>dsa;ljf</p>
            <p>dsa;ljf</p>
            </div>
            
            
        </>

    )
};

export default Layout;