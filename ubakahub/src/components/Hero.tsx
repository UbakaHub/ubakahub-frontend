import network from "../assets/icons/network.svg";
import approve from "../assets/icons/approve.svg";
import trade from "../assets/icons/trade.svg";
import build from "../assets/icons/building.svg";
import './Hero.css'


const Hero = () => {
  return (
    <header className="hero">
      <div className="hero__icons">
        <img src={build} alt="building" className="icon"/>
        <img src={approve} alt="approve" className="icon"/>
        <img src={network} alt="network" className="icon"/>
        <img src={trade} alt="trade" className="icon"/>
      </div>
      <h2>Build. Validate. Connect. Trade.</h2>
      <p>
        Spend your time wisely, even on things that matter, like your home. Secure floorplan approval,
        buy eco-friendly building materials, talk to professionals and build a home
        without stressing too much about it.
      </p>
      <button className="cta-btn">
        Get early access <span className="arrow">➡️</span>
      </button>
    </header>
  );
};

export default Hero;
