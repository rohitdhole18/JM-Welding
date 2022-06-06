import React from 'react'

import './Sliding.css'
import g1 from './g1.webp'
import g2 from './g2.webp'
import g3 from './g3.webp'
import g4 from './g4.webp'
import g5 from './g5.webp'
import g6 from './g6.webp'
import g7 from './g7.webp'
import g8 from './g8.webp'
import g9 from './g9.webp'
import g10 from './g10.jpg'
import g11 from './g11.jpg'
import g12 from './g12.jpg'

export default function Sliding() {
    return (
        <>

           

            <h1>Sliding Gate</h1>
            <hr />

            <div classMain="main" id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">

                <div id="no1">
                    <div>
                        <img src={g1} alt='' className="img" />
                    </div>
                    <div>
                        <img src={g2} alt='' className="img" />
                    </div>
                    <div>
                        <img src={g3} alt='' className="img" />
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div id="no2">
                    <div>
                        <img src={g4} alt='' className="img" />
                    </div>
                    <div>
                        <img src={g5} alt='' className="img" />
                    </div>
                    <div>
                        <img src={g6} alt='' className="img" />
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div id="no3">
                    <div>
                        <img src={g7} alt='' className="img" />
                    </div>
                    <div>
                        <img src={g8} alt='' className="img" />
                    </div>
                    <div>
                        <img src={g9} alt='' className="img" />
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div id="no4">
                    <div>
                        <img src={g10} alt='' className="img" />
                    </div>
                    <div>
                        <img src={g11} alt='' className="img" />
                    </div>
                    <div>
                        <img src={g12} alt='' className="img" />
                    </div>
                </div>

            </div>

        </>
    )
}
