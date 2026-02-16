import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage"

export const AuthContext = createContext()

function AuthProvider({children}){
    const [userData, setUserData] = useState(null)

    useEffect(()=>{
        setLocalStorage() // Ensure initial data exists
        const {employees, admins} = getLocalStorage()
        setUserData({employees, admins})
    },[])

    return(
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider