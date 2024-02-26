
import React from 'react'
import mainpic from'./mainpic.png'
import pic1 from'./pic1.jpg'


export default function Home() {
  return (  
    <>
    <section className=' j_center1'>
        <div className='mainDisplayHome j_center2'>
          <div className='homeMaintext'>
            <h5 className='h-5'>Hi, my name is</h5>
            <h2 className='h-2'>Mohit Mahmud.</h2>
            <h4 className='h-4'>I love to build things for the web.</h4>
            <p>I,am sofeware enguneer specializing in building (and occasionally designing)<span> execeptional  digital experiences. Also i create responsive UI . I love Develop user interfaces </span>and web application with latest technologies . Transfoming ideas technoilogies . Transforming ideas info reality through code . </p>
          </div>
          <div className='homeMainPic'>
              <img className="mainpic" src={mainpic} alt="" />
          </div>
        </div>
    </section>

<section>
<div className='backgroundcard1 j_center1'>
    <div className='cardbox1 j_center2'>
    <div className="card mb-3 bg-black" style={{maxWidth: '100%', }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://miro.medium.com/v2/resize:fit:1358/1*I3PbDMBEsJcYB-lgK6_YBg.jpeg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body ">
        <p className="card-text">I really enjoy the UI. I <span> can set up a </span>client project. </p>
        <p className="card-text"><small className="text-muted">read the full Story</small></p>
        <h5 className="card-title "></h5>
      </div>
    </div>
  </div>
</div>

    </div>
    </div>
</section>


    </>

  )
}
