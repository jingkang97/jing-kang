import * as React from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import styles from '../styles/Home.module.css'

const openTopTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const openBottomTransition = {
  open: {
    transition: {delay: 3, staggerChildren: 0.15, delayChildren: 1 }
  },
  closed:{
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const closedTransition = {
  duration: 1,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const list = {
  closed: { opacity: 0, y: 50, 
    transition: {
      y: {stiffness: 1000}
    }
  },
  open: {
      opacity: 1,
      y: 20,
      ease: [0.6, 0.01, -0.05, 0.9],
      transition: {
        y: {stiffness: 1000}
      }
  }

}


export const MobileNavigation = ({ variants, isOpen, toggleOpen }) => (
  
  <motion.div
    initial="closed"
    animate={isOpen ? 'open':'closed'}
    variants={variants}
    className={styles.menuWrapper}
  >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTransition }
        }
        className={styles.navigationTop}
      >
        <Box  fontWeight='500' fontSize={{base: 30, md: 40, xl: 50}} display='flex' flexDirection={{base: 'column', sm:'column', md:'row'}} justifyContent={{base: 'space-between', md: 'space-between'}}>
        <div className="navigation-top__left">
          <Box fontSize={{base: 20, md: 25}}><h4 className={styles.navigationh4}>DON'T BE SHY!</h4></Box>
          <div className={styles.navigation_top__left__links}>
            <a className={styles.link_nav} href="https://github.com/jingkang97" rel="noopener" target="_blank">
              👾 GH 
            </a>
            <a className={styles.link_nav} href="https://www.linkedin.com/in/ngjingkang/" rel="noopener" target="_blank">
              💼 LD 
            </a>
            <a className={styles.link_nav} href="https://www.instagram.com/ngjkjk" rel="noopener" target="_blank">
              📸 IN 
            </a>
          </div>
        </div>
        <div className="navigation-top__right">
        <Box fontSize={{base: 20, md: 25}}><h4 className={styles.navigationh4}>GOT A COOL IDEA?</h4></Box>
          <a
            className={styles.email}
            href="mailto:ngjingkang97@gmail.com?subject=Hello there!"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Tell me about it
          </a>
        </div>
        </Box>
      </motion.div>
      

      <motion.div
        variants={openBottomTransition}
        className={styles.menuList}      
      >
        <Box 
        fontSize={{base: 50, md: 60, lg: 70}}
        fontFamily={'koulen'}
        >
        <motion.div
          variants={list}
          whileHover={{scale:1.1}}

        >
          <a
             href='#about'
             onClick={toggleOpen}
             // target="_blank"
             rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <h2 style={{color:"#FF008C"}}>
              ✌🏻 ABOUT
            </h2>
          </a>
          </motion.div>

          <motion.div
          variants={list}
          whileHover={{scale:1.1}}
          >
          <a
            href='#projects'
            onClick={toggleOpen}
            // target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <h2 style={{color: '#D30AE1'}}>📂 PROJECTS</h2>
          </a>
          </motion.div>

          <motion.div
          variants={list}
          whileHover={{scale:1.1}}

          >
          <a
            href='#experiences'
            onClick={toggleOpen}
            // target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <h2 style={{color:'#9C1AFF'}}>🛠 EXPERIENCES</h2>
          </a>
          </motion.div>

          <motion.div
          variants={list}
          whileHover={{scale:1.1}}
          >
          <a
            href='./resume.pdf'
            download="Ng Jing Kang's Resume" 
            // onClick={toggleOpen}
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <h2 style={{color:'#7700FF'}}>📄 RESUME</h2>
          </a>
          </motion.div>

          {/* <motion.div
          variants={list}
          whileHover={{scale:1.1}}
        >
            <a
            // href="https://pixelchef.netlify.app/"
            href='https://github.com/jingkang97'
            onClick={toggleOpen}
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <h2 style={{color:'#4400FF'}}>🚚 SOURCE CODE</h2>
          </a>
          </motion.div> */}

          {/* <motion.div
          variants={list}
          whileHover={{scale:1.1}}
          >
          <a
            href="https://ngjingkang.netlify.app/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <h2>
              NgJingKang
              <br />
              Version 1
            </h2>
          </a>
          </motion.div> */}
        </Box>
      </motion.div>
  </motion.div>
);