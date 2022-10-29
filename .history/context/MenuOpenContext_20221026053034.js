import {useReducer,useContext,createContext} from 'react'

export const MenuOpenContext = createContext();
export const MenuOpDispatchContext = createContext();
export const MenuOpenProvider = ({children}) => {
    const [openMenu,dispatch] = useReducer((prev) => prev => !prev);

    return (
        <MenuOpenContext.Provider value={[openMenu]}>
            <MenuOpDispatchContext>
            {children}
            </MenuOpDispatchContext>
        </MenuOpenContext.Provider>
    )
}

export const useMenuOpen = () => useContext(MenuOpenContext);

// const menuHander = () => {
//     setOpenMenu(prev => !prev);
// }