import Link from 'next/link'
import { Container, Box } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import { motion, useCycle } from 'framer-motion';
import MenuToggle from './menuToggle';
import { MobileNavigation } from './MobileNavigation';
import { useEffect } from 'react';

const variants = {
    open: {
      left: 0,
      pointerEvent: "none",
      transition: {
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
    closed: {
      left: "-100vw",
      pointerEvent: "none",
      transition: {
        delay: 1,
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.9],
      },
    },
  };

const NavBar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    useEffect(() => {
      console.log(isOpen)
    }, [isOpen])
    

    return (
        <motion.div
            className={styles.navigationWrapper}
        >
            <MobileNavigation variants={variants} isOpen={isOpen} toggleOpen={toggleOpen}/>
            <motion.div
                className={styles.menuTop}
                initial={{ y: -100}}
                animate={{ y: 0 }}
                transition={{ duration: 3, type: 'spring', delay: 5}}
            >
                <motion.div
                    initial={false}
                    animate={isOpen ? "open": "closed"}
                >
                <Container 
                    className={styles.menubar}
                    display="flex" 
                    p={2} 
                    maxW="container.xl"
                    wrap="wrap" 
                    alignItems="center" 
                    justifyContent="space-between"
                    color='silver'
                >
                        <Link href='/'>
                            <a className={styles.brandWrapper}>
                                <img src="jkbrand.png" className={styles.brandLogo} />
                                <Box className={styles.brandReveal}>
                                    <span className={styles.banner}>
                                        JINGKANG
                                    </span>
                                </Box>
                            </a>
                        </Link>
                        <MenuToggle toggle={() => toggleOpen()} />
                </Container>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default NavBar         