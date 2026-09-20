import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Walker({ waving }) {
  return (
    <div className={waving ? "" : "stick-bob"}>
      <svg viewBox="0 0 80 120" className="h-28 w-20 sm:h-32 sm:w-24" data-testid="stickman-svg">
        <circle cx="40" cy="16" r="10" fill="#faf7f2" stroke="#0c2e24" strokeWidth="4" />
        <line x1="40" y1="26" x2="40" y2="62" stroke="#0c2e24" strokeWidth="4" strokeLinecap="round" />
        <line className="stick-arm back" x1="40" y1="34" x2="24" y2="50" stroke="#0c2e24" strokeWidth="4" strokeLinecap="round" />
        {waving ? (
          <line className="stick-wave" x1="40" y1="34" x2="60" y2="14" stroke="#0c2e24" strokeWidth="4" strokeLinecap="round" />
        ) : (
          <line x1="40" y1="34" x2="58" y2="52" stroke="#0c2e24" strokeWidth="4" strokeLinecap="round" />
        )}
        <line className="stick-leg" x1="40" y1="62" x2="52" y2="94" stroke="#0c2e24" strokeWidth="4" strokeLinecap="round" />
        <line className="stick-leg back" x1="40" y1="62" x2="28" y2="94" stroke="#0c2e24" strokeWidth="4" strokeLinecap="round" />
        <g transform="translate(46,50)">
          <ellipse cx="12" cy="6" rx="9" ry="6.5" fill="#ba2d2d" />
          <ellipse cx="9" cy="5" rx="2.5" ry="1.6" fill="#e39832" opacity="0.6" />
          <line x1="19" y1="1" x2="25" y2="-6" stroke="#faf7f2" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="26" cy="-7" r="3" fill="#faf7f2" stroke="#d8d2c4" strokeWidth="1" />
          <rect x="0" y="8" width="26" height="24" rx="5" fill="#faf7f2" stroke="#d8d2c4" strokeWidth="2" />
          <line x1="6" y1="8" x2="9" y2="2" stroke="#d8d2c4" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="8" x2="17" y2="2" stroke="#d8d2c4" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

export default function StickmanRunner({ onDone }) {
  const [phase, setPhase] = useState("across");

  return (
    <div className="pointer-events-none fixed bottom-4 left-0 z-[60]" data-testid="stickman-easter-egg">
      <AnimatePresence>
        {phase === "across" && (
          <motion.div
            key="across"
            initial={{ x: "-15vw" }}
            animate={{ x: "115vw" }}
            transition={{ duration: 4.5, ease: "linear" }}
            onAnimationComplete={() => setPhase("return")}
          >
            <Walker />
          </motion.div>
        )}
        {phase === "return" && (
          <motion.div
            key="return"
            initial={{ x: "115vw" }}
            animate={{ x: "36vw" }}
            transition={{ duration: 3.5, ease: "linear" }}
            onAnimationComplete={() => {
              setPhase("wave");
              setTimeout(onDone, 2400);
            }}
          >
            <div style={{ transform: "scaleX(-1)" }}>
              <Walker />
            </div>
          </motion.div>
        )}
        {phase === "wave" && (
          <motion.div
            key="wave"
            initial={{ x: "36vw", opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={{ y: [0, -8, 0, -8, 0] }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          >
            <div style={{ transform: "scaleX(-1)" }}>
              <Walker waving />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
