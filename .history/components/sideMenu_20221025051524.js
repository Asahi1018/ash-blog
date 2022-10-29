import {useState} from 'react'
import {StyledButton,StyledList} from './style'



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
                <li>list4</li>
                <li>list5</li>
                </ul>
            </nav>
         </aside>
        
        </>
    )
}

export default SideMenu;