import React from 'react'
import img2 from '../assest/img2.jpg'
import box1 from '../assest/fronted.jpg';
import box2 from '../assest/reactjs.jpg'
import box3 from '../assest/web.jpg'
import box4 from '../assest/python.png'
import  under from '../assest/co.jpg';
import html from '../assest/html-5.png';
import css from '../assest/css-3.png';
import js from '../assest/java-script.png';
import rs from '../assest/atom.png';
import bt from '../assest/python.png'
import dhruvil from '../assest/d3.jpeg'

export default function Home() {

  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid ">
    <a className=" myname   navbar-brand ms-4  fw-blod" to="#">Dhruvil patel | Reactjs Devloper</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        <li className="nav-item  ">
          <a className="nav-link fw-light" to=''>Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link fw-light" to=''>About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link fw-light" to=''>overview</a>
        </li>
       
      </ul>
 
    </div>
  </div>
</nav>


   <div  className='section-2'>
   <div className='one'>

   <h1  className='patel    text-white tw-bolder' > 
       Hiii, I am  <span className='patel text-info tw-bolder  '> Dhruvil patel</span> </h1>
   <span className="patel  navbar-brand ms-2  fw-bolder text-white " >frontend Devloper</span>
     </div>
     <img className='dhruvil'  src={dhruvil} alt="" />
     </div>

     <div  className='section-3' >
     <h4 className='text-secondary' >Introduction</h4><br />
    <h1 className='text-light'>Overview.</h1><br />
     <h5 className="pre text-secondary   " > An enthusiastic and motivated Student in the field of Computer Science with a keen <br /> interest in Full Stack Development. I love to build software that makes an impact on <br />my  organization and the world. I enjoy solving complex problem and taking on chal<br />lenging tasks. I am currently learning Data structure and algorithm for my interest in <br /> in problem solving. I am a quick learner and open to working in any technology . Det<br /> ailed Oriented  Consistency and Hard work are some of my top qualities . I believe  De <br /> ta consistent practice brings  excellence.</h5>
     </div>

     <div className='section-4'>
<div className='section4one' >
<div className='box1 border rounded '>
<img className='boximg1' src={box1} alt="" />
<h4 className='p-3 text-light '>frontent Devloper</h4>
</div>
</div>
<div className='section4one' >
<div className='box1 border rounded '>
<img className='boximg1' src={box2} alt="" />
<h4 className='p-3 text-light '>Reactjs  Devloper</h4>
</div>
</div>

<div className='section4one' >
<div className='box1 border rounded '>
<img className='boximg1' src={box3} alt="" />
<h4 className='p-3 text-light '>web  Devloper</h4>
</div>
</div>

<div className='section4one' >
<div className='box1 border rounded '>
<img className='boximg1' src={box4} />
<h4 className='p-2 m-2 text-light '>Python Devloper</h4>
</div>
</div>

</div>

<div className='section-5'>
<h3 className=' section5one text-light'  >My skils</h3>
<div className='sectiontwo'>
<img className='img2' src={html} alt="" />
<img  className='img2'  src={css} alt="" />
<img  className='img2'   src={js} alt="" />
<img   className='img2'   src={rs} alt="" />
<img   className='img2'   src={bt} alt="" />
</div>
</div>

<div className='section-6' >
<div className='section6one'></div>
<h4 className='text-secondary' >My work</h4><br />
<h2 className='text-light'>Project</h2><br />
<p className=' section6two  text-secondary'>Following projects showcases my skills and experience through real-world examples of my work.  Each project is briefly described with links to  code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.</p>
</div>

<div className='section-7'>
  <div className='section7one'>
    <img className='under' src={under} alt="" />
<h4 className='undername' > project under construction </h4>
  </div>
</div>


<div className='section-7'>
  <div className='section7one'>
  <img className='under' src={under} alt="" />
  <h4 className='undername' > project under construction </h4>
  </div>
</div>


<div className='section-7'>
  <div className='section7one'>
  <img className='under' src={under} alt="" />
  <h4 className='undername'> project under construction </h4>
  </div>
</div>


<div className='section-7'>
  <div className='section7one'>
  <img className='under' src={under} alt="" />
  <h4 className='undername'> project under construction </h4>
  </div>
</div>

<div className='section-8'>
  <h3 className='section-one8'>Devlop By Patel Dhruvil </h3>
  {/* <div className='icon'>
  <i className=" icons  gg-instagram text-light"></i>
  <i className="icons   gg-facebook text-light"></i>
  </div> */}
</div>

  </>
  )
}
