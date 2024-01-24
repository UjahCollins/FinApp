import React, {useContext} from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AppContext } from '../context/context'

const PrivatePage = () => {
  const {userToken} = useContext(AppContext)
  return (
    <div>
      {
        userToken ? (<Outlet/>): (<Navigate to="/"/>)
      }
    </div>
  )
}

export default PrivatePage
