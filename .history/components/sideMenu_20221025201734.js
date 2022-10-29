import {useState} from 'react'
import styles from '../styles/sideMenu.module.scss'
import Link from 'next/link'
const SideMenu = () => {
    const [openMenu,setOpenMenu] = useState(false);
    const menuHander = () => {
        setOpenMenu(prev => !prev);
    }//openMenuがtureのときにopenクラスをつけるようにすればいい。

   

    return (
        <>
            <button className={`${styles.btn} ${openMenu ? styles.open :"undifined"}`} onClick={() => menuHander()}>
                <span className={styles.btnSpan}></span>
                <span className={styles.btnSpan}></span>
                <span className={styles.btnSpan}></span>
            </button>
        <aside className={`${styles.aside} ${openMenu ? styles.open :"undifined"} `}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                <li className={styles.li}><Link href="/blog">list1</Link></li>
                <li className={styles.li}>list2</li>
                <li className={styles.li}>list3</li>
                <li className={styles.li}>list4</li>
                <li className={styles.li}>list5</li>
                </ul>
            </nav>
        </aside>
        
        </>
    )
}

export default SideMenu;