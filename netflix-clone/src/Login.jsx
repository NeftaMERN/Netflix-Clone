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

                    <div className="display_form"></div>

                </div>

            </div>



        </div>

    );

}

export default Login;