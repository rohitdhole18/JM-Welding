import React from 'react'

import './railing.css'
import o1 from './o1.jpg'
import o2 from './o2.jpg'
import o3 from './o3.jpg'
import o4 from './o4.jpg'
import o5 from './o5.jpg'
import o6 from './o6.jpg'
import o7 from './o7.jpg'
import o8 from './o8.jpg'
import o9 from './o9.jpg'
import o10 from './o10.jpg'
import o11 from './o11.jpg'
import o12 from './o12.jpg'

export default function Sliding() {
    return (
        <>

           

            <h1>Railings</h1>
            <hr />

            <div classMain="main" id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">

                <div id="no1">
                    <div>
                        <img src={o1} alt='' className="img" />
                    </div>
                    <div>
                        <img src={o2} alt='' className="img" />
                    </div>
                    <div>
                        <img src={o3} alt='' className="img" />
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div id="no2">
                    <div>
                        <img src={o4} alt='' className="img" />
                    </div>
                    <div>
                        <img src={o5} alt='' className="img" />
                    </div>
                    <div>
                        <img src={o6} alt='' className="img" />
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div id="no3">
                    <div>
                        <img src={o7} alt='' className="img" />
                    </div>
                    <div>
                        <img src={o8} alt='' className="img" />
                    </div>
                    <div>
                        <img src={o9} alt='' className="img" />
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div id="no4">
                    <div>
                        <img src={o10} alt='' className="img" />
                    </div>
                    <div>
                        <img src={o11} alt='' className="img" />
                    </div>
                    <div>
                        <img src={o12} alt='' className="img" />
                    </div>
                </div>

            </div>

        </>
    )
}
