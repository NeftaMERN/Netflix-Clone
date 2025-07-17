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

                                    <div className="display_input">

                                        <div>

                                            <input type="text" placeholder="Email or mobile number"></input>

                                        </div>

                                        <div>

                                            <input type="text" placeholder="Email or mobile number"></input>

                                        </div>

                                        <div>

                                            <input type="text" placeholder="Email or mobile number"></input>

                                        </div>

                                    </div>

                                </div>


                              </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>



        </div>

    );

}

export default Login;