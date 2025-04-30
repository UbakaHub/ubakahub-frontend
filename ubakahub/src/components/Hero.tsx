import './Hero.css';

import NetworkIcon from '../assets/icons/network.svg?react';
import ApproveIcon from '../assets/icons/approve.svg?react';
import TradeIcon from '../assets/icons/trade.svg?react';
import BuildIcon from '../assets/icons/building.svg?react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__icons">
        <BuildIcon className="icon" />
        <ApproveIcon className="icon" />
        <NetworkIcon className="icon" />
        <TradeIcon className="icon" />
      </div>

      <h2>Build. Validate. Connect. Trade.</h2>

      <p>
        Spend your time wisely, even on things that matter, like your home. Secure floorplan approval,
        buy eco-friendly building materials, talk to professionals, and build a home
        without stressing too much about it.
      </p>

      <button className="cta-btn">
        Get early access <span className="arrow">➡️</span>
      </button>
    </section>
  );
};

export default Hero;
