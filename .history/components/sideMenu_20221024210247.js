import {useState} from 'react'
import styled from "styled-components";

const StyledButton = styled.button`
border-radius: 10%;
border: none;
display: inline-block;
width: 70px;
height: 0px;
font-weight: bold;
cursor: pointer;
`;



const SideMenu = () => {
    const [openMenu,setOpenMenu] = useState(false);
    const menuHander = () => {
        setOpenMenu(prev => !prev);
    }//openMenuがtureのときにopenクラスをつけるようにすればいい。

   

    return (
        <>
        <aside>
        <StyledButton onClick={() => menuHander()}></StyledButton>
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