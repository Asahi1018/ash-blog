import {useState} from 'react'
import styles from '../styles/sideMenu.module.scss'
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
        <aside className={styles.aside}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                <li className={styles.li}>list1</li>
                <li className={styles.li}>list2</li>
                <li className={styles.li}>list3</li>
                <li>list4</li>
                <li>list5</li>
                </ul>
            </nav>
        </aside>
        
        </>
    )
}

export default SideMenu;