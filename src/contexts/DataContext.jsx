import React, {createContext} from 'react'

import useData from '../hooks/useData.jsx'

const Context = createContext()

function DataProvider({children}){
    const {} = useData()

    return (
        <Context.Provider
        value={{}}
        >
            {children}
        </Context.Provider>
    )
}

export {Context, DataProvider}