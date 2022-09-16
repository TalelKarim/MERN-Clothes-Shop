import { createContext, useState } from "react";

export const ItemContext= createContext()

export const ItemProvider = ({children}) => {
    const [item, setItem] = useState('ManShirts')
    
    return (
        <ItemContext.Provider value={{item,setItem}}>
                 {children}
        </ItemContext.Provider>
    )
}

export const HomeContext = createContext()

export const HomeProvider = ({children }) => {
    const [display, setDisplay] = useState(true)
    const toggleDisplay = () => {
        setDisplay(display ? false : true )
    }

    return (
        <HomeContext.Provider value={{display, toggleDisplay}}>
            {children}
        </HomeContext.Provider>
    )
}