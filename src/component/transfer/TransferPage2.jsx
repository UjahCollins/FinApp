import React from 'react'
import "./Transfer.css"

const TransferPage2 = () => {
  return (
    <div className='mainTransferContainer'>
      <div className='transferContainer'>
          <div className='tansactionPinHolder'>
          <div className='TransacPin'><span>Transaction Pin</span></div>
          <div className='inputPin'>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
          <div className='TranscPinBtn'><button> Enter</button></div>
          </div>
      </div>
      
    </div>
  )
}

export default TransferPage2
