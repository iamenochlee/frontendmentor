import React from 'react';
import HeroImageMobile from "../images/image-hero-mobile.png";
import DatabizLogo from "../images/client-databiz.svg";
import AudiophileLogo from "../images/client-audiophile.svg";
import MeetLogo from "../images/client-meet.svg";
import MakerLogo from "../images/client-maker.svg";

function Hero() {
    return(
        <main className="hero">
            <section className="hero__content">
                <h1 className="hero__content--header">Make remote work</h1>
                <p className="hero__content--p">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <a href="/" className="hero__content--button">Learn more</a>

                <div className="hero__content-info">
                    <img alt='img' src={DatabizLogo}/>
                    <img alt='img' src={AudiophileLogo}/>
                    <img alt='img' src={MeetLogo}/>
                    <img alt='img' src={MakerLogo}/>
                </div>
            </section>

            <section className="hero__image">
                    <img className="hero__image--mobile" src={HeroImageMobile} alt="img" />
            </section>

        </main>
    )
}







export default Hero;