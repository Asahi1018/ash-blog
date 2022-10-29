import {useState} from 'react'

const sideMenu = () => {
    const [openMenu,setOpenMenu] = useState(false);
    return (
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
    )
}