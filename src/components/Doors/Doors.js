import React from 'react'

import './door.css'
import r1 from './r1.jpg'
import r2 from './r2.jpg'
import r3 from './r3.jpg'
import r4 from './r4.jpg'
import r5 from './r5.jpg'
import r6 from './r6.jpg'
import r7 from './r7.jpg'
import r8 from './r8.jpg'
import r9 from './r9.jpg'
import r10 from './r10.jpg'
import r11 from './r11.png'
import r12 from './r12.png'

export default function Sliding() {
    return (
        <>

           

            <h1>Safety Doors</h1>
            <hr />

            <div classMain="main" id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">

                <div id="no1">
                    <div>
                        <img src={r1} alt='' className="img" />
                    </div>
                    <div>
                        <img src={r2} alt='' className="img" />
                    </div>
                    <div>
                        <img src={r3} alt='' className="img" />
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div id="no2">
                    <div>
                        <img src={r4} alt='' className="img" />
                    </div>
                    <div>
                        <img src={r5} alt='' className="img" />
                    </div>
                    <div>
                        <img src={r6} alt='' className="img" />
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div id="no3">
                    <div>
                        <img src={r7} alt='' className="img" />
                    </div>
                    <div>
                        <img src={r8} alt='' className="img" />
                    </div>
                    <div>
                        <img src={r9} alt='' className="img" />
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div id="no4">
                    <div>
                        <img src={r10} alt='' className="img" />
                    </div>
                    <div>
                        <img src={r11} alt='' className="img" />
                    </div>
                    <div>
                        <img src={r12} alt='' className="img" />
                    </div>
                </div>

            </div>

        </>
    )
}
