import {useReducer,useContext,createContext} from 'react'

export const MenuOpenContext = createContext();
export const MenuOpenProvider = ({children}) => {
    const [openMenu,] = useReducer((prev) => setOpenMenu(prev => !prev));

    return (
        <MenuOpenContext.Provider value={[openMenu,setOpenMenu]}>
            {children}
        </MenuOpenContext.Provider>
    )
}

export const useMenuOpen = () => useContext(MenuOpenContext);

// const menuHander = () => {
//     setOpenMenu(prev => !prev);
// }