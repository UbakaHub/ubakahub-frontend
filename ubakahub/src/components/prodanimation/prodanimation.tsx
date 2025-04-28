//prodanimation.jsx
import { motion } from 'framer-motion';
import './prodanimation.css';

const Prodanimation: React.FC = () => {
  return (
    <section className="prodanimation-section">
      {/* Animated Logo Container */}
      <motion.div 
        className="logo-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="animated-logo">
          {/* Replace this div with your actual logo */}
          <div className="placeholder-logo" />
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="content-wrapper">
        <motion.div
          className="text-content"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="number-indicator">02</div>
          <h1 className="title">UbakaPlan</h1>
          <p className="description">
            Collaborate seamlessly on construction projects, anytime, anywhere.
          </p>
        </motion.div>

        {/* Animated Coming Soon Badge */}
        <motion.div
          className="coming-soon"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1.1 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1.5
          }}
        >
          Coming Soon
        </motion.div>
      </div>
    </section>
  );
};

export default Prodanimation;