import React from 'react'
import './Missions.css'
import m1 from '../../assets/m1.jpg'
import m2 from '../../assets/m2.jpg'
import m3 from '../../assets/m3.jpg'
import m4 from '../../assets/m4.jpg'
import i1 from '../../assets/i1.png'
import i2 from '../../assets/i2.png'
import i3 from '../../assets/i3.png'

const Missions = () => {
  return (
    <div className='missions'>
        <div className="mission">
            <img src={m1}/>
            <div className="caption">
            <a href="https://github.com/Habiba-Ansari/Gumbr"><img src={i1} alt="" /></a>
                <p>Gumber</p>
            </div>            
        </div>
        <div className="mission">
            <img src={m2}/>
            <div className="caption">
            <img src={i2} alt="" />
                <a href="https://wordpress.com/home/balladsbyhabiba.wordpress.com"><p>WordPress</p></a>
            </div>         
        </div>
        <div className="mission">
            <img src={m3}/>
            <div className="caption">
                <img src={i3} alt="" />
                <a href="https://quizzynest.netlify.app/#"><p>QuizzyNest</p></a>
            </div>         
        </div>
        <div className="mission">
            <img src={m4}/>
            <div className="caption">
                <img src={i3} alt="" />
                <a href="https://www.slideshare.net/HabibaAnsari12/edit_my_uploads"><p>Projects</p></a>
            </div>         
        </div>

        <div>
        <a href="https://github.com/Habiba-Ansari"><button className='btn'>Explore More</button></a></div>
    </div>
  )
}

export default Missions
