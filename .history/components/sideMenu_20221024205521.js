import {useState} from 'react'
import styled from "styled-components";


const SideMenu = () => {
    const [openMenu,setOpenMenu] = useState(false);
    const menuHander = () => {
        setOpenMenu(prev => !prev);
    }//openMenuがtureのときにopenクラスをつけるようにすればいい。

   

    return (
        <>
        <StyledButton onClick={() => menuHander()}></StyledButton>
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
        
        </>
    )
}

export default SideMenu;