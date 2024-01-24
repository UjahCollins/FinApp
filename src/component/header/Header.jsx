import React from 'react'
import "./Header.css"
import user from "../images/user.jpg"
// import history from "../images/history.jpg"
// import dropdown from "../images/dropdown.jpg"
import { IoIosNotifications } from "react-icons/io"
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import { FaHistory } from "react-icons/fa";

const Header = () => {
  return (
    <div className='mainHeader'>
      <div className='LeftHeader'>
        <div className='ProfileLogo'>
          <img src={user} alt="" />
        </div>
        <div className='ProfileText'>
          <p>Hello Collins</p>
          <nav className='navText'>Welcome to<h2>Eazi <span>Pay</span></h2></nav>
        </div>
      </div>
      <div className='RightHeader'>
        <div className='history'>
        <div className='historyHolder'>
          <div></div>
          <FaHistory />
          <p>History</p>
          <MdOutlineArrowDropDownCircle />
        </div>
        </div>
        <IoIosNotifications fill='#642C9D' size={50} />
      </div>
    </div>
  )
}

export default Header
