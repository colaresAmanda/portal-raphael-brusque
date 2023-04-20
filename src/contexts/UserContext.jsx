import React, {createContext} from 'react'

import useAuth from '../hooks/useAuth'

const Context = createContext()

function UserProvider({children}){
    const {authenticated, loading, login, generateResetPasswordCode, resetPassword, checkUser} = useAuth()

    return (
        <Context.Provider
        value={{authenticated, loading, login, generateResetPasswordCode, resetPassword, checkUser}}
        >
            {children}
        </Context.Provider>
    )
}

export {Context, UserProvider}