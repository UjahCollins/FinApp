import React from 'react'
import eye from "../images/eyes.jpg"
import "./AccountDashboard.css"


const AccountDashbaord = () => {
  return (
    <div className='accountDashboard'>
      <div>
          <h5 className='hatlabel'>Total Balance</h5>
          <div className='BalanceHolder'>
            <img className='eye' src={eye} alt="" />
            <h1>2,000,0000,000.00</h1>
          </div>
        </div>
        <div>
            <h5 className='hatlabel'>Account Number</h5>
             <h1>9090433369</h1>
        </div>
    </div>
  )
}

export default AccountDashbaord
