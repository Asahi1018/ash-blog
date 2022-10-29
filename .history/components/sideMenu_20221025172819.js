import {useState} from 'react'
import styles from '../styles/sideMenu.module.scss'
const SideMenu = () => {
    const [openMenu,setOpenMenu] = useState(false);
    const menuHander = () => {
        setOpenMenu(prev => !prev);
    }//openMenuがtureのときにopenクラスをつけるようにすればいい。

   

    return (
        <>
        <aside>
        <button className={`${styles.btn} ${openMenu ? styles.open :"undifined"}`} onClick={() => menuHander()}>
                <span className={openMenu ? styles.open : styles.btnSpan}></span>
                <span className={openMenu ? styles.open : styles.btnSpan}></span>
                <span className={openMenu ? styles.open : styles.btnSpan}></span>
        </button>
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
        
        </>
    )
}

export default SideMenu;