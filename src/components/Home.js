import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../index.css"

const Home = () => {

  const clickedEmail = () => {
    window.location.href = "https://www.google.com/"
  }

  const clickedLinkedin = () => {
    window.location.href = "https://www.linkedin.com/in/yash-sinha-02359a1b2/"
  }

  const clickedGithub = () => {
    window.location.href = "https://www.github.com/yashsinha501"
  }

  const clickedWhatsapp= () => {
    window.location.href = "https://wa.me/qr/WAH3NKBNZDVHH1"
  }

  const clickedLeetcode= () => {
    window.location.href = "https://leetcode.com/13yashsinha/"
  }

  const clickedresume= () => {
    window.location.href = "https://drive.google.com/file/d/1PnvuYnZBrZcwYa82upk9yvN1E12ZVELX/view?usp=sharing"
  }

  return (
    <div className='home'>
      <div className='data-all'>
        <div className='data-section' >
          <div className='data' >
            <h1>Hello, I'm Yash Sinha</h1>
            <h2>Web Developer...</h2>
            <p>Imagine, Visualizing and Implementing By Coding</p>
          </div>
          <div className='btns'>
            <button>Hire Me</button>
            <button onClick={clickedresume} >Resume</button>
          </div>
          <div className='socials'>
            <div onClick={clickedEmail} ><FontAwesomeIcon icon="fa-solid fa-envelope" />Email</div>
            <div onClick={clickedLinkedin} ><FontAwesomeIcon icon="fa-brands fa-linkedin" />Linkedin</div>
            <div onClick={clickedGithub} ><FontAwesomeIcon icon="fa-brands fa-github" />Github</div>
            <div onClick={clickedWhatsapp} ><FontAwesomeIcon icon="fa-brands fa-whatsapp" />whatsapp</div>
            <div onClick={clickedLeetcode} ><FontAwesomeIcon icon="fa-solid fa-display-code" />Leetcode</div>
          </div>
        </div>
        <div className='photo-section' >
          <img 
            src="https://i.postimg.cc/hG58BKzZ/1672752673248.png"
            alt='logo'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
