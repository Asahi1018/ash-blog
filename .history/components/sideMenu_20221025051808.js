import {useState} from 'react'
// import {StyledButton,StyledList} from './style'
import styled from "styled-components";

const StyledButton = styled.button`
border-radius: 10%;
border: none;
display: inline-block;
width: 70px;
height: 50px;
font-weight: bold;
cursor: pointer;
`;

const StyledList = styled.li`
background-color: blue;


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