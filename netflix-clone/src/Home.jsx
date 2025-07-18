import "./Home.css"
import logopic from "./assets/netflix-img/icons8-netflix-48.png"
import polularpic from "./assets/netflix-img/bad boys.jpg"
import hunterpic from "./assets/netflix-img/the hunter.jpg"
import venompic from "./assets/netflix-img/venom.jpg"
import madamepic from "./assets/netflix-img/madame.jpg"
import chostbusterpic from "./assets/netflix-img/chostbuster.jpg"
import beekeeperpic from "./assets/netflix-img/beekeeper.jpg"
import aliaenpic from "./assets/netflix-img/aliaen.jpg"

function Home() {

    return(
    <>
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

                    <div className="movie_about">

                        <h1>Big Hero 6</h1>

                        <div className="movie_paragraph">

                            <p>Big Hero 6 shows how a young inventor turns his pain into power,<br />
                                using technology and friendship to become a real hero. </p>

                        </div>

                        <div className="movie_btn">

                            <button>

                             <a href="https://v.moviebox.ng/wa5Atb8V3y"><img src="https://img.icons8.com/?size=100&id=85165&format=png&color=000000" /></a>
                                

                                <label>Play</label>
        
                            </button>

                        </div>

                        <div className="more_btn">

                            <button>More Info</button>

                        </div>

                        <div className="movie_lists">

                            <div className="Popular_Movie">

                                <h1>Popular Movie On Netflix</h1>

                                <div className="popular_movie_list">

                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />

                                </div>

                                <h1>Animation For You</h1>

                                <div className="popular_movie_list">

                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />

                                </div>

                                <h1>Only On Netflix</h1>

                                <div className="popular_movie_list">

                                    <img src={hunterpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={hunterpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />
                                    <img src={polularpic}  />

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

    </>

    );

}

export default Home;