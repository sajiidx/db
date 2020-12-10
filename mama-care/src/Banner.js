import "./Banner.css"
function Banner(){
    
    return(
        <header
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://img.wallpapersafari.com/desktop/1920/1080/98/1/BRXzS1.png"`,
                backgroundPosition: "center center"
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
            <div className="banner__faded"></div>
        </header>
    )
}

export default Banner;