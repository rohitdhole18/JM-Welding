import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

export default function Home() {
    return (
        <>

            <div id="bacimg">
                <h1>JALINDERNATH WELDING</h1>
                <h3>The Best Quality You Have Looking For</h3>

            </div>
            <Link to="/Sliding" type="button" className="btn btn-primary">See the Designs</Link >

        </>
    )
}
