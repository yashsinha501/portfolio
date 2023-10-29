import React from 'react'



const clickedecoomerce= () => {
  window.location.href = "https://github.com/yashsinha501/proshop-Ecommerce"
}

const clickedfoodapp= () => {
  window.location.href = "https://github.com/yashsinha501/foodApp"
}

const clickedportfolio= () => {
  window.location.href = "https://github.com/yashsinha501/portfolio"
}


const Work = () => {

  return (
    <div className='ProjectCard'>
      <b>Education</b>
      <hr></hr>
      <div className='project-cards'>
        <div className='project-cards-1'>
          <div className='work-pic'>
            <img src="https://i.ibb.co/PNwsvGW/proshop.png" alt="proshop" border="0"/>
          </div>
          <div className='right'>
            <div className='work-line'></div>
            <h1><b>ProShop Ecommerce</b></h1>
            <div className='work-code'>
              A MERN Full stack E-commerce website to simplify the purchasing
              <br></br>
              ReactJS is used for the frontend of the website and NodeJS for the Backend
              <br></br>
              MongoDB for the Database purpose and RAZORPAY for Payment Gateway
            </div>
            <button>Visit Site</button>
            <button onClick={clickedecoomerce} >Source Code</button>
          </div>
        </div>
        <div className='project-cards-1'>
          <div className='work-pic'>
            <img src="https://i.ibb.co/nCMRZGh/foodApp.png" alt="foodApp" border="0"/>
          </div>
          <div className='right'>
            <div className='work-line'></div>
            <h1
              style={{
                marginLeft: "10px"
              }}
            ><b>Food Fire</b></h1>
            <div className='work-code'
              style={{
                marginLeft: "10px"
              }}
            >
              A Frontend Responsive WebApp for Food Menu  
              <br></br>
              ReactJS for the frontend of website & routing and CSS for Designing
              <br></br>
              Displayed data is being called by fetching through API and structurly displaying it
            </div>
            <button>Visit Site</button>
            <button onClick={clickedfoodapp} >Source Code</button>
          </div>
        </div>
        <div className='project-cards-1'>
          <div className='work-pic'>
            <img src="https://i.ibb.co/SXDVGtp/portfolio-1.png" alt="portfolio-1" border="0" />
          </div>
          <div className='right'>
            <div className='work-line'></div>
            <h1><b>Portfolio Website</b></h1>
            <div className='work-code'>
              A Frontend Responsive WebApp for personal portfolio 
              <br></br>
              ReactJS is used for the frontend of the website and routing
              <br></br>
              CSS for Designing for the webiste and making it Responsive
            </div>
            <button>Visit Site</button>
            <button onClick={clickedportfolio} >Source Code</button>
          </div>
        </div>
      </div>
  </div>
  )

}

export default Work
