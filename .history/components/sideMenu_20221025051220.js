import {useState} from 'react'
import second from 'first'



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