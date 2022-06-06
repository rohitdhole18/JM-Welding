import React from 'react'

import './Grills.css'
import n1 from './n1.webp'
import n2 from './n2.webp'
import n3 from './n3.webp'
import n4 from './n4.webp'
import n5 from './n5.jpg'
import n6 from './n6.jpg'
import n7 from './n7.jpg'
import n8 from './n8.jpg'
import n9 from './n8.jpg'
import n10 from './n10.jpg'
import n11 from './n11.jpg'
import n12 from './n12.jpg'

export default function Sliding() {
    return (
        <>

           

            <h1>Grills</h1>
            <hr />

            <div classMain="main" id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">

                <div id="no1">
                    <div>
                        <img src={n1} alt='' className="img" />
                    </div>
                    <div>
                        <img src={n2} alt='' className="img" />
                    </div>
                    <div>
                        <img src={n3} alt='' className="img" />
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div id="no2">
                    <div>
                        <img src={n4} alt='' className="img" />
                    </div>
                    <div>
                        <img src={n5} alt='' className="img" />
                    </div>
                    <div>
                        <img src={n6} alt='' className="img" />
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div id="no3">
                    <div>
                        <img src={n7} alt='' className="img" />
                    </div>
                    <div>
                        <img src={n8} alt='' className="img" />
                    </div>
                    <div>
                        <img src={n9} alt='' className="img" />
                    </div>
                </div>
                <br />
                <hr />
                <br />
                <div id="no4">
                    <div>
                        <img src={n10} alt='' className="img" />
                    </div>
                    <div>
                        <img src={n11} alt='' className="img" />
                    </div>
                    <div>
                        <img src={n12} alt='' className="img" />
                    </div>
                </div>

            </div>

        </>
    )
}
