import * as React from "react";
import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="1.5"
    stroke='silver'
    strokeLinecap="round"
    {...props}
  />
);
const MenuToggle = ({ toggle }) => {
  return(
    <button style={{marginRight:'10px'}} onClick={toggle}>
      <motion.svg
        whileHover={{ width: 45, height: 20 }}
        width="47"
        height="23"
        viewBox="0 0 26 20"
      >
        {/* <svg width="45" height="23" viewBox="0 0 23 23"> */}
        <Path
            variants={{
              closed: { d: "M 2 2.5 L 35 2.5" },
              open: { d: "M 3 16.5 L 25 2.5" }
            }}
          />
          <Path
            d="M 2 9.423 L 35 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 25 16.346" },
              open: { d: "M 3 2.5 L 25 16.346" }
            }}
          />
        {/* </svg> */}
        </motion.svg>
      </button>
  )
  };

export default MenuToggle