import React from 'react'
import "./AccountProfile.css"
const AccountProfile = () => {
  return (
    <div className='AccountProfileHolder'>
        <div className='AccountProfileMAin'>
            <div className='accountProfileInfo'>
              <nav>Name</nav>
              <nav> Eazi Account</nav>
              <nav> Email</nav>
              <nav>Gender</nav>
              <nav> DOB</nav>
              <nav> Address</nav>
            </div>
            <div className='accountProfileInfo'>
            <nav>Ujah COllins</nav>
              <nav> 8090546538</nav>
              <nav> Ujahcollins@gmail.com</nav>
              <nav>Male</nav>
              <nav> 2nd April 2024</nav>
              <nav> 42 Muyibi Street</nav>
            </div>
        </div>
    </div>
  )
}

export default AccountProfile
