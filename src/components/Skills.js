import React from 'react'

const Skills = () => {
  return (
    <div className='skill' >
      <div className='progress-bar'>
        <div className='container' >
          HTML
          <div className='bar-1' ></div>
        </div>
        <div className='container' >
          CSS
          <div className='bar-2' ></div>
        </div>
        <div className='container' >
          Javascript
          <div className='bar-3' ></div>
        </div>
        <div className='container' >
          ReactJS
          <div className='bar-4' ></div>
        </div>
        <div className='container' >
          NodeJS
          <div className='bar-5' ></div>
        </div>
      </div>
      <div className='cards'>
        <div className='cont-1' >
          <div className='white' ><img src="https://cdn.icon-icons.com/icons2/3398/PNG/512/plus_logo_c_icon_214621.png" alt='logo' /></div>
          <div className='white' ><img src="https://cdn-icons-png.flaticon.com/512/5968/5968509.png" alt='logo' /></div>
        </div>
        <div className='cont-2'>
          <div className='black' ><img src="https://companieslogo.com/img/orig/MDB_BIG.D-96d632a9.png?t=1648915248" alt='logo' /></div>
          <div className='black' ><img src="https://www.nextontop.com/assets/img/services/web/expressjs.svg" alt='logo' /></div>
          <div className='black' ><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--e_rqeB7o--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/2400/1%2AFPtQLT2Zk-baHficCz_mXQ.png" alt='logo' /></div>
        </div>
      </div>
    </div>
  )
}

export default Skills
