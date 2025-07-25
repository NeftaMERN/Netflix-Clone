import logopic from "./assets/netflix-img/icons8-netflix-48.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"

function Login() {

    const navigate = useNavigate();

function handleLogin() {

    const Username = document.getElementById("email").value;
    const Password = document.getElementById("password").value;

    const web_Email = Username.endsWith("@gmail.com");
    
    if(web_Email  && Password !== "" ) {

        navigate("./home")

    }else {

        alert("incorect")

    }

}


    return(

        <>
        

        <div className="All_container">

            <div className="container">

                <div className="main_logo_container">

                    <div className="Logo_container">

                        <img src={logopic} alt="Netflix Logo" />

                    </div> 

                </div>


                <div className="form_container">

                    <div className="display_form">

                        <div className="ab_form">

                            <div className="about_form_container">


                              <div className="about_form">

                                <div className="display_form_ab">

                                    <h1>Sign In</h1>

                                    <div className="input_container">

                                        <div className="disply_input">

                                            <input type="text" placeholder="Email or mobile number" id="email"></input>

                                        </div>

                                        <div className="disply_input">

                                            <input type="password" placeholder="Password" id="password"></input>

                                        </div>

                                        <div className="input_btn">

                                        <button onClick={handleLogin}>Sign In</button>

                                        </div>

                                    </div>


                                    <div className="forgot_btn">

                                        <a href="">Forgot password?</a>

                                    </div>

                                    <div className="checkbox_btn">

                                        <input type="checkbox" id="" /> <>Remember me</>

                                    </div>

                                </div>


                              </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <footer>

                <div className="footer_container">

                    <div className="ab_container">

                        <p> <a href="">Questions? Contact us.</a></p>

                        <div className="ab_links">

                            <div className="">

                                <p> <a href="">FAQ</a></p>
                                <p> <a href="">Cookie Preferences</a></p>

                            </div>

                            <div className="links">

                                <p><a href="">Help Center</a></p>
                                <p><a href="">Corporate Information</a></p>

                            </div>

                            <div className="links">

                                <p><a href="">Terms of Use</a></p>

                            </div>

                            <div className="links">

                                <p><a href="">Privacy</a></p>

                            </div>

                        </div>
                    
                    </div>

                </div>

            </footer>

        </div>

        </>

    );

}

export default Login;