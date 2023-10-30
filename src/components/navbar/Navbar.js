import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo_top.png'
import cart_icon from '../assets/cart1.png'
// import Footer from '../Footer/Footer'

const Navbar = () => {

  const [menu,setMenu] = useState("");

  const [myStyle, setStyle] = useState({
    // color: 'white',
    backgroundColor: 'white'
  })

  const [btnText, setBtnText] = useState("Dark");

  const dark = () =>{
    if(myStyle.color === 'white'){
      setStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("Dark") 
    }
    else{
      setStyle({
        color: 'white',
        backgroundColor: 'black'
      }) 
      setBtnText("Light") 
    }
  }

  return (
    <div className='navbar' style={myStyle}>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p style={myStyle}>Exclsv.com</p>
      </div>
      <ul className='nav-menu'>
        {/* hr = theme */}
        <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<theme/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration:'none'}} to='/mens'>Men</Link>{menu==="mens"?<theme/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<theme/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration:'none'}} to='/kids'>Kids</Link>{menu==="kids"?<theme/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/login'><button style={myStyle}>Login</button></Link>
        {/* <button className='btn' onClick={dark} style={myStyle}>{btnText}</button> */}
        <label className="switch">
          <input type="checkbox" onClick={dark} style={myStyle}/>
          <span className="slider round"></span>
        </label>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar