import React from 'react'
import "./Deposit.css"

const Deposit = () => {
  return (
    <div className='depositMAinCOntainer'>
      <div className='DepositContainer'>
        <div className='DpositBtn'>
          <input type="number"  placeholder='Enter Deposit Amount'/>
          <button>Deposit</button>
          </div>
      </div>
    </div>
  )
}

export default Deposit
