import React from 'react';
import './App.css';

import img from "./j1.jpg";
import imgA from "./j2.jpg";
import imgB from "./white.png";





const validEmailRegex = RegExp(
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        mobile1: null,
      email: null,
      password: null,
      errors: {
        mobile1: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'mobile1': 
        errors.mobile1 = 
          value.length < 5
            ? 'mobile1 must be at least 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }

  render() {
    const {errors} = this.state;
    return (
      
  
 





    

   
       
            <div>
                <div class="orange">

                    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
                        <div class="carousel-inner">
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={img} class="d-block w-100" alt="..." width="300px" height="800px" />
                                    </div>
                                    <div class="carousel-item">
                                        <img src={imgA} class="d-block w-100" alt="..." width="300px" height="800px" />
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
                                        href="file:///C:/Users/user/Desktop/hello%20world%202/orange1.html"><img src={imgB}
                                            width="250px" height="70px" alt=''/></a>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="navbarNav">
                                        <ul class="navbar-nav">
                                            <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="./"><b>Help</b></a>

                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="./"><b>Terms & Conditions</b></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div id="error"></div>
                         <form id="form" onsubmit="signUp(event)"> 


                            <div class="margin">
                                <h1><b>Create an account</b></h1>
                                <br />
                                <div >
                                    <label><b>Email address</b></label>
                                    <br />
                                    <input type="email" class="email1" id="email" name="email" />
                                    <br></br>
                                    {errors.email.length > 0 &&
                                        <span className='error'>{errors.email}</span>}

                                    <div id="emailmessage" ></div>
                                    <p>eg: username@domain.com</p>
                                </div>
                                <br />
                                <div>
                                    <label><b>Mobile</b></label>
                                    <br />
                                    <input type="text" class="mobile1" id="phonenum" name="phonenum" />

                                    <br></br>
                                    {errors.phonenum.length > 0 &&
                                        <span className='error'>{errors.phonenum}</span>}

                                    <div id="phonemessage" ></div>
                                    <p>eg: 077********</p>
                                </div>
                                <br />
                                <div>
                                    <label for="password"><b>Create Password</b></label>
                                    <br />
                                    <input type="password" class="password1" id="password" name="password" />

                                    <br></br>
                                    {errors.password.length > 0 &&
                                        <span className='error'>{errors.password}</span>}

                                    <div id="passwordError"></div>
                                    <p>The Password should be between 6-18 characters.</p>
                                </div>
                                <br />
                                <div>
                                    <input type="checkbox" name="os" />
                                    <label><b>I agree to the terms & conditions Orange.</b></label>
                                    <br /><br />
                                    <input type="checkbox" name="os" checked />
                                    <label><b>Receive Coding Academy Newsletter.</b></label>
                                    <br /><br />
                                    <div >

                                        <input class="form-button" type="submit" />
                                    </div>

                                    <div>
                                        <a href="./"><input type="button" value="Already have an account?login" class="form-button2" /></a>
                                    </div>
                                  
</div>
                            </div>
                            </form>
                    </div>
                </div>
            </div >
            
        )

    }
}