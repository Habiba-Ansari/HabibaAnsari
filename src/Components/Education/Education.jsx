import React from 'react'
import './Education.css'
import h1 from '../../assets/h1.jpg'
import h2 from '../../assets/h2.jpg'
import h3 from '../../assets/h3.jpg'
import k1 from '../../assets/k1.png'
import k2 from '../../assets/k2.png'

const Education = () => {
  return (
    <div className='education'>
        <div className="edu">
            <img src={h2}/>
            <div className="caption">
            <img src={k1} alt="" />
                <a href="https://myeducationnn.wordpress.com/2025/02/25/secondary-school/"><p>Secondary School</p></a>
            </div>            
        </div>
        <div className="edu">
            <img src={h1}/>
            <div className="caption">
            <img src={k1} alt="" />
                <a href="https://myeducationnn.wordpress.com/2025/02/25/higher-econdary-exam/"><p>Higher Secondary</p></a>
            </div>         
        </div>
        <div className="edu">
            <img src={h3}/>
            <div className="caption">
                <img src={k2} alt="" />
                <a href="https://myeducationnn.wordpress.com/2025/02/25/fy-graduation/"><p>Graduation</p></a>
            </div>         
        </div>
     
        <div><br /><br />
        <a href="https://myeducationnn.wordpress.com/"><button className='btn'>Explore More</button></a></div>
    </div>
  )
}

export default Education
