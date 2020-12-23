import "./Banner.css"
import main_baby from './images/main_baby.jpg'
function Banner(){
    
    return(
        <header
            className="banner"
            style={{
                background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${main_baby})`,
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                position: "relative",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    Hello, World!
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </h1>
            </div>
            <div className="xbanner__faded"></div>
        </header>
    )
}

export default Banner;