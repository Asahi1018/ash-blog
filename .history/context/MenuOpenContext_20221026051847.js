import {createContext} from 'react'

export const MenuOpenContext = createContext();
export const MenuOpenProvider = ({children}) => {
    return (
        <MenuOpenContext.Provider>
            
        </MenuOpenContext.Provider>
    )
}