import React from 'react'
import './ContactUs.css'
import { Link } from 'react-router-dom'
export default function ContactUs() {
    return (
        <>
            <div class="h1">
                <h1>CONTACT US</h1>
            </div>
            <div className="container">

                <hr />
                {/* < class="contact"> */}

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating">
                    <input type="password" width="50px" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">email</label>
                </div> <br />
                <div class="form-floating">
                    <input type="password" width="50px" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Subject</label>
                </div><br />
                <div class="form-floating">
                    <textarea class="form-control" width="50px" placeholder="Leave a comment here" id="floatingTextarea2"
                    ></textarea>
                    <label for="floatingTextarea2">Reviews</label>
                </div>

                <div class="b">
                    <button type="button" class="btn btn-success">Submit</button>
                </div>
                {/* <!-- Add icon library --> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

                {/* <!-- Add font awesome icons --> */}
                <div class="social">
                    <h4>Follow on :- </h4>
                    <Link to="https://www.facebook.com/" class="fa fa-facebook mx-1"></Link>
                    <Link to="https://www.twitter.com/" class="fa fa-twitter mx-1"></Link>
                    <Link to="https://www.instagram.com/" class="fa fa-instagram mx-1"></Link>

                </div>
            </div>
        </>
    )
}
