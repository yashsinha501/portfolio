import React from 'react'

const Education = () => {
  return (
    <div className='edu-cont' >
      <b>Education</b>
      <hr></hr>
      <div className='tag-name' >Here are my Education</div>
      <div className='heading' >
        <div className='topic' >SSC & HSC</div>
        <div className='topic' >Degree</div>
      </div>
      <div className='edu-card' >
        <div className='edu-card-1'>
          <h1>Secondary Education</h1>
          <div className='add' >Burgess English Hr Sec School, Bilaspur(C.G)</div>
          <div className='date' >May, 2018</div>
          <div className='percentage' >: Qualified with 84%</div>
          <h1>Higher Secondary Education</h1>
          <div className='add' >Burgess English Hr Sec School,Bilaspur(C.G)</div>
          <div className='date' >May, 2020</div>
          <div className='percentage' >: Qualified with 79%</div>
        </div>
        <div className='edu-card-2'>
          <h1>B.Tech, Computer Science</h1>
          <div className='add' >Chouksey Engineering College, Bilaspur(C.G)</div>
          <div className='date' >Year 2020 - Year 2024</div>
          <div className='percentage' >: Aggregate 84%</div>
          <div className='content'>
            <div>Learning software development fundatmentals with software engineering.</div>
            <br></br>
            <div>Team management and personality development and communication skills.</div>
            <br></br>
            <div>Being creatively active and trying to acquire new skills and techniques.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
