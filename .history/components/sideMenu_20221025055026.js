import {useState} from 'react'
import {styles} from '../styles/sideMenu.module.scss'
const SideMenu = () => {
    const [openMenu,setOpenMenu] = useState(false);
    const menuHander = () => {
        setOpenMenu(prev => !prev);
    }//openMenuがtureのときにopenクラスをつけるようにすればいい。

   

    return (
        <>
        <aside>
        <StyledButton onClick={() => menuHander()}>
            <StyledSpan></StyledSpan>
            <StyledSpan></StyledSpan>
            <StyledSpan></StyledSpan>

        </StyledButton>
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