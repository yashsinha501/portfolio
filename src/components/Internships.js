import React from 'react'

const Internships = () => {
  return (
    <div className='edu-cont' >
      <b>Internships</b>
      <hr></hr>
      <div className='tag-name' >Here are my Internships</div>
      <div className='heading' >
        <div className='topic' >01</div>
        <div className='topic' >02</div>
      </div>
      <div className='edu-card' >
        <div className='edu-card-1'>
          <h1>Software Development Intern</h1>
          <div className='company' >TransBit Technologies Sol. Pvt. Ltd.</div>
          <div className='date-intern' >Dec, 2022 - Jan, 2023</div>
          <div className='content-intern'>
            <div>Extraction of data from pdf Files uding image2table and tabula</div>
            <br></br>
            <div>Written REST APIs using JaxRS</div>
            <br></br>
            <div>Design pages using Drupal for web content Management System</div>
          </div>
        </div>
        <div className='edu-card-2'>
          <h1>Data Entry Intern</h1>
          <div className='company'>Ministry of Cooperation</div>
          <div className='date-intern' >Mar, 2023 - May, 2023</div>
          <div className='content-intern'>
            <div>To complete the data collection activity of concerned Cooperatives</div>
            <br></br>
            <div>Input all Data in the National Cooperation Database</div>
            {/* <br></br>
            <div>Design pages using Drupal for web content Management System</div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Internships
