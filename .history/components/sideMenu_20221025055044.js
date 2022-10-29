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
        <button onClick={() => menuHander()}>
            <span></span>
            <span></span>
            <span></span>

        </button>
            <nav>
                <ul>
                <StyledList>list1</StyledList>
                <StyledList>list2</StyledList>
                <StyledList>list3</StyledList>
                <StyledList>list4</StyledList>
                <StyledList>list5</StyledList>
                </ul>
            </nav>
         </aside>
        
        </>
    )
}

export default SideMenu;