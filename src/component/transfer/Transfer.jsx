
import "./Transfer.css"

const Transfer = () => {
  
  return (
    <div className='mainTransferContainer'>
        <div className='transferContainer'>
            <input type="text" name='accountNumber' placeholder='Enter Account number' />
            <p> Ujah Collins</p>
            <input type="text" name='transferAmount' placeholder='Enter Amount' />
            {/* <input type="text" placeholder='Enter Pin' /> */}
            <button>Transfer</button>
        </div>
    </div>
  )
}

export default Transfer
