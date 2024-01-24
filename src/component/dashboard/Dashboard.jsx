import React, { useContext } from 'react'
import { AppContext } from '../context/context'
import "./Dashboard.css"
import Header from '../header/Header';
import Sidebar from "../sidebar/Sidebar"
import AccountDashbaord from '../accountDashboard/AccountDashbaord';
import TransactionDashboard from '../transactionDashboard/TransactionDashboard';
import Deposit from '../deposit/Deposit';
import Withdrawal from '../wihdrawal/Withdrawal';
import Transfer from '../transfer/Transfer';
// import TransferPage2 from '../transfer/TransferPage2';
// import TransferPage1 from '../transfer/TransferPage1';
import AccountProfile from '../accountProfile/AccountProfile';
import Utilities from '../utilities/Utilities';

const Dashboard = () => {
  const {active} = useContext(AppContext);
  return (
    <div className='MainCOntainer'>
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='contentPage'>
        <div className='Header'>
            <Header/>
        </div>
        <div className='accountDashboard'>
          <AccountDashbaord/>
        </div>
        <div className='TransactionDashboard'>
        
        {active === "Dashboard" ? (
        <TransactionDashboard />
      ) : active === "Deposit" ? (
        <Deposit />
      ) : active === "Withdrawal" ? (
        <Withdrawal />
      ) : active === "Transfer" ? (
        <Transfer/>
      ) : active === "Betting" ? (
        <Utilities />
      ) : active === "Account" ? (
        <AccountProfile />
      ) : null}

          {/* <TransactionDashboard/> */}
          {/* <Deposit/> */}
          {/* <Withdrawal/> */}
          {/* <Transfer/> */}
          {/* <TransferPage2/> */}
          {/* <TransferPage1/> */}
          {/* <AccountProfile/> */}
          {/* <Utilities/> */}
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard
