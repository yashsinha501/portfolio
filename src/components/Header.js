import React from 'react'
import "../index.css"
import { Link } from 'react-router-dom'


const clickedresume= () => {
  window.location.href = "https://drive.google.com/file/d/1PnvuYnZBrZcwYa82upk9yvN1E12ZVELX/view?usp=sharing"
}

const Header = () => {
  return (
    <div className='header'>
      <Link to="/" className='name'><div>Yash Sinha</div></Link>
        <div className='elements'>
            <Link to="/" className='elements' ><div>HOME</div></Link>
            <Link to="/skills" className='elements'><div>SKILLS</div></Link>
            <Link to="/works" className='elements'><div>WORKS</div></Link>
            <Link to="/internships" className='elements'><div>INTERNSHIPS</div></Link>
            <Link to="/education" className='elements'><div>EDUCATION</div></Link>
            <Link to="/contact" className='elements'><div>CONTACT</div></Link>        
        </div>
        <button className='hire-me' onClick={clickedresume} >HIRE ME</button>
    </div> 
  )
}

export default Header
