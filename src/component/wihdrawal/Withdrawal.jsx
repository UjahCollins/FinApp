import React from 'react'
import "./Withdrawal.css"

const Withdrawal = () => {
  return (
    <div className='depositMAinCOntainer'>
    <div className='DepositContainer'>
      <div className='DpositBtn'>
        <input type="number"  placeholder='Enter Withdrawal Amount'/>
        <button>Withdraw</button>
        </div>
    </div>
  </div>
  )
}

export default Withdrawal
