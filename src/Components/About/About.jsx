import React from 'react'
import './About.css'
import a1 from '../../assets/a1.png'
import a3 from '../../assets/a3.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <div className='image-container'>
        <img src={a1} alt="" className='a1'/>
         <div className="caption">
          </div>
          </div>
      </div>
      <div className="about-right">
        <h3>The things you should know</h3>
        <h2>About Me</h2>
        <br />
        <p>I am a dedicated and ambitious Bachelor’s student in Computer Science, actively seeking internship and job opportunities to enhance my skills and gain industry experience. 
          My strong work ethic, adaptability, and ability to collaborate effectively make me a valuable addition to any team.</p>
<br />
<p>With prior exposure to professional work culture, I have developed a keen understanding of workplace dynamics and expectations. 
  I excel in co-curricular activities, maintaining a balance between academics and personal growth. While I am not naturally inclined toward leadership, I thrive in structured environments where I can follow instructions and contribute efficiently.</p>
<br />
<p>Beyond academics, I am passionate about my hobbies and believe in maintaining them as an essential part of my life. 
  Punctuality and discipline define my approach to both personal and professional commitments, and I constantly strive for excellence in everything I do. 
  I am a dreamer with a strong drive to learn and grow, eager to embrace new challenges and opportunities in the field of technology.</p>
      </div>
    </div>
  )
}

export default About
