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

                <div className="about_movie_container">

                    <div className="ab_titel_movie">

                        <img src="https://img.icons8.com/?size=100&id=GJ1x26ZmfZ96&format=png&color=000000" alt="" />

                        <p>Animation</p>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Home;