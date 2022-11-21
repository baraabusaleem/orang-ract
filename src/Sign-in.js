import React, { Component } from 'react'
import './App.css';


class SignIn extends Component {

    state = {
        Name: 'Jameel-Algharabat',
        home: 'Home'
    }

    render() {
        return (
            <div>
                <div class="orange">

                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                        <div class="carousel-inner">
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="j1.jpg" class="d-block w-100" alt="..." width="300px" height="800px" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="j2.jpg" class="d-block w-100" alt="..." width="300px" height="800px" />
                                    </div>

                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                                    data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                                    data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <nav class="navbar navbar-expand-lg bg-light">
                                <div class="container-fluid">
                                    <a class="navbar-brand"
                                        href="file:///C:/Users/user/Desktop/hello%20world%202/orange1.html"><img src="white.png"
                                            width="250px" height="70px" /></a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="#"><b>Help</b></a>

                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#"><b>Terms & Conditions</b></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div id="error"></div>
                        <form id="form">
                            <div class="margin">
                                <h1><b>Sign in</b></h1>
                                <br />
                                <div >
                                    <label><b>Email address</b></label>
                                    <br />
                                    <input type="email" class="email" id="email" />
                                    <div id="emailmessage" ></div>
                                    <p>eg: username@domain.com</p>
                                </div>
                                <br />
                                <div>
                                    <label for="password"><b>Create Password</b></label>
                                    <br />
                                    <input type="password" class="password" id="password" />
                                    <div id="password-error"></div>

                                </div>
                                <br />
                                <a href="https://orangecodingacademy.com/password/reset" style="color:black;" >Forgot your password?</a>
                                <br /><br />
                                <div>
                                    <input type="submit" class="form-button" />
                                </div>
</div>
                        </form>
                    </div>
                </div>
            </div>

          )

    }
}

export default SignIn