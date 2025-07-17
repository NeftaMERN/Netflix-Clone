import logopic from "./assets/netflix-img/icons8-netflix-48.png"

function Login() {

    return(

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

                                            <input type="text" placeholder="Email or mobile number"></input>

                                        </div>

                                        <div className="disply_input">

                                            <input type="password" placeholder="Password"></input>

                                        </div>

                                    </div>

                                    <div className="input_btn">

                                        <button>Sign In</button>

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

            <div className="footer_container">

                

            </div>

        </div>

    );

}

export default Login;