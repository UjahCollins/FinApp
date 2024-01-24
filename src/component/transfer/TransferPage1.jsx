import React from 'react'
import "./Transfer.css"

const TransferPage1 = () => {
  return (
    <div className='ComfirmTransfer'>
        <div className='ConfrimMainCOntainer'>
          <h3>Confirm Details</h3>
          <div className='disclaimer'>
            <p>Disclaimer</p>
            <nav>Kindly confrim the details of the reciever before sending <br /> money sent can not be reversed.</nav>
          </div>
          <div className='detailsTransfer'>
            <div className='TransferTitles'>
              <nav>Account Number</nav>
              <nav> Account Name</nav>
              <nav>Amount</nav>
            </div>
            <div className='TransferTitles'>
              <nav>8080934567</nav>
              <nav> Chinonso Ebere</nav>
              <nav>20,000</nav>
            </div>
          </div>
          <button>Confirm</button>
        </div>
    </div>
  )
}

export default TransferPage1
