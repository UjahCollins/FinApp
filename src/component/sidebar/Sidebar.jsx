import React, { useContext, useEffect } from 'react'
import "./Sidebar.css"
// import dashboard from "../images/dashboard.jpg"
import logo from "../images/logo.jpg"
// import user from "../images/user.jpg"
import logout from "../images/logout.jpg"
import { AppContext } from '../context/context'

const Sidebar = () => {
const {datas, setDatas, setActive}= useContext(AppContext)

const handleChange = (id) =>{
  const newDatas = datas.map((item)=>{
    if(item.id === id){
      setActive(item.title);
      return{...item, active:true};
    }else{
      return{...item, active:false};
    }
  });

  setDatas(newDatas);
};

useEffect(()=>{}, [datas]);
  return (
    <div className='sidebarContainer'>
        <div className='mainLogoHolder'>
        <img src={logo} alt="img" />
            <h2>Eazi <span>Pay</span></h2>
        </div>
        <div className='mainMenuHolder'>
        {datas.map((item) => {
        return (
          <div className='menuHolder'>

          <div 
          key={item.id}
          className={!item.active ? "menuTextHolder" : "menuTextHolder-active"}
          onClick={() => handleChange(item.id)}
          >
            <img className='dashboardLogos' src={!item.active ? item.img : item.imgb} alt={item.title} />
            <nav
            className={
              !item.active ? "board-item-title" : "board-item-title-lit"
            }
            >{item.title}</nav>
          </div>
         
        </div>
        );
      })}
        </div>

        
        <div className='sidebarFooter'>
        <img src={logout} alt="img" />
            <nav>Logout</nav>
        </div>
    </div>
  )
}

export default Sidebar
