import React from 'react'
import './intro.css'
import lamp from './lamp.png'

export default function Intro() {
  return (
    <section className='intro' >

        <div className="upper">
          <div className="upperleft">
            <h1>Creative.</h1>
            <h1>Handmade.</h1>
            <h1>Crafty.</h1>
            <p>We come from a place and time forgotten.Our story is one of revival and reconnection to craft</p>
            <button>Explore</button>
          </div>
          <div className="upperright">
            <div className="boxframe">
              <img src={lamp} alt="" />
            </div>
            </div>
        </div>
         
        <div className="lower">
          <ul className="footerlist">
            <li>Facebook</li>
            <li>Whatsapp</li>
            <li>Instagram</li>
          </ul>
        </div>

    </section>
  )
}


