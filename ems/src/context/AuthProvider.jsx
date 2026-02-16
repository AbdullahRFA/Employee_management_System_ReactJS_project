import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utils/LocalStorage"

export const AuthContext = createContext()

function AuthProvider({children}){

    const [userData, setUserData] = useState(null)

useEffect(()=>{
    const {employees, admins} = getLocalStorage()

    setUserData({employees, admins})
},[])



    return(
        <div>
        <AuthContext.Provider value={userData}>

            {children}
        </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider