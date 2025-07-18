import "./Home.css"
import logopic from "./assets/netflix-img/icons8-netflix-48.png"

function Home() {

    return(

        <div className="home_container">

            <div className="display_container">

                <div className="nav_bar_container">

                    <nav>

                        <div className="logo">

                            <img src={logopic} alt="Netflix-logo" />

                               <a href="">Home</a>
                               <a href="">Tv Shows</a>
                               <a href="">Movies</a>
                               <a href="">New&Popular</a>
                               <a href="">My List</a>
                               <a href="">Browser by Language </a>


                        </div>

                    </nav>

                </div>

            </div>

        </div>

    );

}

export default Home;