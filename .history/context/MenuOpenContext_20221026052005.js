import {createContext} from 'react'

export const MenuOpenContext = createContext();
export const MenuOpenProvider = ({children}) => {
    const [openMenu,setOpenMenu] = useState(false);

    return (
        <MenuOpenContext.Provider value={}>

        </MenuOpenContext.Provider>
    )
}