import React from 'react'
import { createContext, useState } from 'react'
import { data } from '../../Data'

export const AppContext = createContext()

export const AppProvider = ({children}) => {
   const [datas, setDatas]= useState(data)
   const [active, setActive] = useState()
   const [userToken, setUserToken] = useState("")

  return (
   <AppContext.Provider 
   value={{
      datas,
      setDatas,
      active,
      setActive,
      userToken, 
      setUserToken
   }}>
    {children}
   </AppContext.Provider>
  )
}

export default AppProvider
