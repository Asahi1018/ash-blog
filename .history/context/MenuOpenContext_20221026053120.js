import {useReducer,useContext,createContext} from 'react'

export const MenuOpenContext = createContext();
export const MenuOpDispatchContext = createContext();
export const MenuOpenProvider = ({children}) => {
    const [openMenu,dispatch] = useReducer((prev) => prev => !prev);

    return (
        <MenuOpenContext.Provider value={openMenu}>
            <MenuOpDispatchContext.Provider value={dispatch}>
            {children}
            </MenuOpDispatchContext.Provider>
        </MenuOpenContext.Provider>
    )
}

export const useMenuOpen = () => useContext(MenuOpenContext);
export const useMenuOpen = () => useContext(MenuOpenContext);

// const menuHander = () => {
//     setOpenMenu(prev => !prev);
// }