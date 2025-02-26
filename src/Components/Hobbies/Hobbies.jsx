import React from 'react'
import './Hobbies.css'
import { Link } from 'react-scroll';
import read from '../../assets/t3.jpg'
import watch from '../../assets/t1.jpg'
import paint from '../../assets/t6.png'
import poem from '../../assets/t7.png'
import code from '../../assets/t8.jpg'

const Hobbies = () => {
  return (
    <div className='hobbies'>
      <div className="hob">
                  <img src={watch}/>
                  <div className="cap">
                  <a href="https://trakt.tv/users/yuphabibamadeit/ratings"><p>Watch</p></a>
                  </div>            
              </div>
              <div className="hob">
                  <img src={paint}/>
                  <div className="cap">
                      <a href="https://dribbble.com/yuphabibamadeit"><p>Paint</p></a>
                  </div>         
              </div>
              <div className="hob">
                  <img src={poem}/>
                  <div className="cap">
                  <a href="https://www.wattpad.com/user/Habiba_Ansari"><p>Poem</p></a>
                  </div>         
              </div>
              <div className="hob">
                  <img src={code}/>
                  <div className="cap">
                     <a href="https://github.com/Habiba-Ansari"><p>Code</p></a>
                  </div>         
              </div>
              <div className="hob">
                  <img src={read}/>
                  <div className="cap">
                  <a href="https://app.thestorygraph.com/books-read/yuphabibamadeit"><p>Read</p></a>
                  </div>         
              </div>
      <div className='slider'>
        <ul>
          <li>
            <div className=''></div>
          </li>
        </ul>
      </div>

      
    </div>
  )
}

export default Hobbies
