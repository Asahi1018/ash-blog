import {useReducer,useContext,createContext} from 'react'

export const MenuOpenContext = createContext();
export const MenuOpenContext = createContext();
export const MenuOpenProvider = ({children}) => {
    const [openMenu,dispatch] = useReducer((prev) => prev => !prev);

    return (
        <MenuOpenContext.Provider value={[openMenu]}>
            {children}
        </MenuOpenContext.Provider>
    )
}

export const useMenuOpen = () => useContext(MenuOpenContext);

// const menuHander = () => {
//     setOpenMenu(prev => !prev);
// }