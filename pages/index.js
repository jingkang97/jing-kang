import { useEffect, useRef } from 'react'
import { Box, Container, Heading, Image, SimpleGrid, Tooltip } from "@chakra-ui/react"
import { motion } from 'framer-motion'
import { BsFolder} from 'react-icons/bs'
import {FiExternalLink, FiGithub} from 'react-icons/fi'
import styles from '../styles/Home.module.css'

const hoverEffect = typeof window !== `undefined` ? require("hover-effect").default : null;
// const locomotiveScroll = typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const Page = () => {
    const line1 = 'creating beautiful and'
    const line2 = 'seamless interfaces is my calling'
    const sentence = {
        hidden: {opacity: 1},
        visible: {
            opacity: 1,
            transition: {
                delay: 5,
                staggerChildren: 0.08,
            }
        }
    }
    const letter = {
        hidden: { opacity: 0, y: 50},
        visible: {
            opacity: 1,
            y: 0,
        }
    }
    const about = {
        hidden: { x: '-1000', opacity: 0 },
        show: {
            opacity: 1,
            x: 0,
            transition:{
            type: 'spring', duration: 1, bounce: 0.3
            }
        }
    }
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.3
          }
        }
      }
    const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
    }    
    useEffect(() => {
        var _myAnimation = new hoverEffect({
            parent: document.querySelector('.my-div'),
            image1: 'images/jk2.JPG',
            image2: 'images/young.jpg',
            displacementImage: 'images/young.jpg',
            imagesRatio: 1500/1200
        });
    }, [])

    // locomotive scroll
    const scrollRef = useRef();

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
          }
        //   const scroll = import("locomotive-scroll").then((LocomotiveScroll) => {
        //     new LocomotiveScroll.default({
        //         el: scrollRef.current,
        //         smooth: true,
        //         // reloadOnContextChange: true,
        //         // multiplier: 0.65,
        //         // inertia: 0.3,
        //     });
        //   });
            // `useEffect`'s cleanup phase
            // return () => scroll.destroy();
    }, []);

    return (
        <Box 
            ref={scrollRef} 
            data-scroll-container
        >
        
        {/* Landing Page */}
        <Container
            className={styles.grid}
            maxW="container"
            h="100vh"
            overflowX={'hidden'}
        >   
            
            <Box h="100%" bg="" p='10px'  position={'relative'} display='flex' flexDirection={'row'} justifyContent='center'> 
                <Container height={{base: '100px', md: '200px', lg: '200px'}} className={styles.blob1}></Container>
                <Container width={{base: '100px', md: '300px', lg: '500px'}} className={styles.blob2}></Container>
                <Container width={{base: '100px', md: '300px', lg: '500px'}} className={styles.blob3}></Container>
                {/* <Container height={{base: '100px', md: '300px', lg: '500px'}} className={styles.blob4}></Container>
                <Container width={{base: '100px', md: '300px', lg: '500px'}} className={styles.blob5}></Container> */}
                <motion.div
                    style={{
                        position:'absolute',
                        right:'0%',
                        bottom:'20%'
                    }}
                    initial={{x: 200, y: 100, opacity: 0}}
                    animate={{ x: 80, y: 0, opacity: 1}}
                    transition={{delay: 5, duration: 1}}
                >
                    <Image  height={{base: '200px', md: '200px', lg: '240px', xl: '350px'}} src="Hand 3.svg" />
                </motion.div>
                <motion.div
                    style={{
                        zIndex: '0',
                        position:'absolute',
                        left:'-120px',
                        top:'10%'
                    }}
                    initial={{x: -200, y: 0, opacity: 0}}
                    animate={{ x: 80, y: 0, opacity: 1}}
                    transition={{delay: 5, duration: 1}}
                >
                    <Image  height={{base: '50px', md: '80px', lg: '100px', xl: '150px'}} src="Hand 1.svg" />
                </motion.div>

                <Box flexGrow={1} h="100%" maxW="container.lg" display="flex" flexDirection={'column'} bg='' justifyContent={'center'}>
                <Heading zIndex={2} fontWeight={900} letterSpacing='-2px' whiteSpace='-10px' fontSize={{base:'50', md:'70', xl:'90'}}>
                {/* <AnimatedParagraph /> */}
                    <motion.div
                    variants={sentence}
                    initial="hidden"
                    animate="visible"
                    transition={{delay: 5}}
                >   
                    {line1.split("").map((char, index) => {
                        return(
                            <motion.span key={char + "_" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}
                    <br />
                    {line2.split("").map((char, index) => {
                        return(
                            <motion.span key={char + "_" + index} variants={letter}>
                                {char}
                            </motion.span>
                        )
                    })}
                </motion.div>
                </Heading>
                    
                    <Box zIndex={1} fontSize={{base:'15px', md: '15px', lg:'15px'}} mt="50px">
                        <motion.div
                            initial={{ x: 0, y:100, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1}}
                            transition={{ duration: 1, type: 'spring', delay: 5}}
                        >
                        <Box fontWeight={'medium'} mb={5} maxW='container.lg'>Hello there! 👋🏻 I am a software engineer based in Singapore.
                            I have great interest in <span className={styles.highlight}>web</span> development, <span className={styles.highlight}>mobile</span> app developement
                            and <span className={styles.highlight}>human computer interactions</span>.</Box>
                        </motion.div>
                        <motion.div
                            initial={{ x: 0, y:100, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1}}
                            transition={{ duration: 1, type: 'spring', delay: 5}}
                        >
                        {/* <div className={styles.shadow}>Welcome</div> */}
                        <div className={styles.buttongroup}>
                        <a target={'_blank'} rel="nofollow noopener noreferrer" href="mailto:ngjingkang97@gmail.com?subject=Hello there!" className={`${styles.shadow} ${styles.buttonarrow} ${styles.bgblue}`}>
                            <span style={{marginRight:'5px'}}>Say Hi!</span>
                            <svg viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrowicon}>
                                <g className={styles.arrowhead}>
                                    <path d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8" stroke="currentColor" strokeWidth="2"/>
                                </g>
                                <g className={styles.arrowbody}>
                                    <path d="M3.5 4.5H0" stroke="currentColor" strokeWidth="2"/>
                                </g>
                            </svg>            
                            </a>
                        </div>
                        </motion.div>      

                    </Box>
                    <motion.div 
                        style={{
                            position: 'absolute',
                            right: '5%',
                            bottom: '15%',
                            display: 'flex',
                            flexDirection: 'row',
                        }}
                        initial={{x: 200, opacity: 0}}
                        animate={{ x: 0, opacity: 1}}
                        transition={{delay: 5, duration: 1}}
                    >
                        <a href="https://github.com/jingkang97" target='_blank' rel="nofollow noopener noreferrer" className={styles.link}>👾 GH </a>
                        <a href="https://www.instagram.com/ngjkjk/" target='_blank' rel="nofollow noopener noreferrer" className={styles.link}>📸 IN </a>
                        <a href="https://www.linkedin.com/in/ngjingkang/" target='_blank' rel="nofollow noopener noreferrer" className={styles.link}>💼 LD </a>  
                    </motion.div>
                </Box>
            </Box>
        </Container>

        {/* About section */}
        <Box id='about' className={styles.section} >
            <div className={styles.test}>
                <Box display={'flex'} flexDirection='row' alignItems={'center'} fontSize='20px'><span className={styles.title}>About me</span>✌🏻</Box>
                <Box className={styles.subheading}>some stuff you should know ...</Box>
            </div>
        </Box>
        <Box pb={'100px'} w='container' className={styles.nameSection}>
        <Box className={styles.contain}>
            <div className={styles.testfont}>
                01
            </div>
            <motion.div
                whileInView="show"
                viewport={{ once: true, amount: 0.8 }}
                variants={about}
                initial="hidden"        
            >
                <Box className={styles.nameCard}>
                    <div className={styles.aside}>
                        <Box p={{base: '10px 10px'}} fontSize={{base: 12, md: 15}} top={{base: '10%', md: '0'}} className={styles.skill}>NEXTJS, REACTJS, HTML, CSS, PYTHON, MONGODB </Box>
                        <Box flexDir={{base: 'column', md: 'row'}} className={styles.about}>
                            <Box borderRadius={'30px'} overflow={'hidden'} height={{base: 220, md: 250, lg: 300}} width={{base: '100%'}}>
                                <div className='my-div' style={{height:'inherit', width:'inherit'}}></div>
                            </Box>
                            <div>
                                <Box fontSize={{base: 20, md: 20, lg: 30}} margin={{base: 3, md: 5, lg: 5}} className={styles.heading}>
                                    Ng Jing Kang
                                </Box>
                                <Box fontSize={{base: 10, md: 13, lg: 15}} margin={{base: 3, md: 5, lg: 5}} className={styles.bio} >
                                    I am a newly graduated Computer Engineering Student from the National University of Singapore!
                                    I have experience in full stack web development and mobile development. Outside of work, I enjoy watching
                                    tv shows and gaming. 
                                </Box>
                            </div>
                        </Box>
                    </div>
                </Box>
            </motion.div>
            </Box>
        </Box> 
        

        {/* Project Section*/}
        <Box id='projects' mt={{base: 10, md: 20, lg: 20}} className={styles.section} >
            <div className={styles.test}>
            <Box display={'flex'} flexDirection='row' alignItems={'center'} fontSize='20px'><span className={styles.title1}>Projects</span>📂</Box>
            <Box fontWeight={500} className={styles.subheading}>some stuff that i worked on ...</Box>
            </div>
         </Box>
            <Box w='container'>
                <motion.div
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={container}
                    initial="hidden"
                    exit="hidden"
                >
            <SimpleGrid className={styles.grid2} m='0px' h='100%' minChildWidth='300px' spacing='40px' padding={'70px 30px 30px 30px'}>
                
                <motion.div
                variants={item}
                    style={{
                        zIndex: '5',
                        scale: 1,
                    }}
                    whileHover={{
                    // color: 'red',
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 1 }}

                ><Box zIndex={5} backdropFilter='auto' backdropBlur='10px' className={styles.project} height='350px'>
                    <Box className={styles.cardHeader}><BsFolder className={styles.folder}/><Box className={styles.rightIcons}><a rel="nofollow noopener noreferrer" href='https://github.com/jingkang97/memories' target='_blank'><FiExternalLink className={styles.icon}/></a><a href='https://github.com/jingkang97/memories' rel="nofollow noopener noreferrer" target='_blank'><FiGithub className={styles.icon}/></a></Box></Box>
                    <Box fontSize={{base: 30, md: 30, lg: 30}} className={styles.cardTitle}>Photobook </Box>
                    <Box mt={10} className={styles.cardBody}>
                        A social media web app for users to upload photos
                    </Box>
                    <Box className={styles.tech}>
                    <Tooltip placement='top' hasArrow label="MaterialUI" bg='white' borderRadius={20} boxShadow='0px 0px 10px 0px lightgray' color='black'><Image className={styles.techIcons} src='mui.png' height={8}/></Tooltip>
                    <Tooltip placement='top' hasArrow label="React" bg='white' borderRadius={20} boxShadow='0px 0px 10px 0px lightgray' color='black'><Image className={styles.techIcons}src='react.svg' height={7}/></Tooltip>
                    <Tooltip placement='top' hasArrow label="MongoDB" bg='white' borderRadius={20} boxShadow='0px 0px 10px 0px lightgray' color='black'><Image className={styles.techIcons} src='mongo.png' height={7}/></Tooltip>
                    </Box>
                </Box>
                </motion.div>
                
                <motion.div
                    variants={item}

                    style={{
                        zIndex: '5',
                        scale: 1,
                        
                    }}
                    whileHover={{
                    color: 'red',
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 1 }}

                >
                    <Box zIndex={5}   className={styles.project} height='350px'>
                    <Box className={styles.cardHeader}><BsFolder className={styles.folder}/><Box className={styles.rightIcons}><a rel="nofollow noopener noreferrer" href='https://github.com/jingkang97' target='_blank'><FiExternalLink className={styles.icon}/></a><a href='https://github.com/jingkang97' rel="nofollow noopener noreferrer" target='_blank'><FiGithub className={styles.icon}/></a></Box></Box>
                    <Box fontSize={{base: 30, md: 30, lg: 30}} className={styles.cardTitle}>TravelAdvisor </Box>
                    <Box mt={10} className={styles.cardBody}>
                    A map web application that shows point of interest nearby
                    </Box>
                    <Box className={styles.tech}>
                    <Tooltip placement='top' hasArrow label="MaterialUI" bg='white' borderRadius={20} boxShadow='0px 0px 10px 0px lightgray' color='black'><Image className={styles.techIcons} src='mui.png' height={8}/></Tooltip>
                    <Tooltip placement='top' hasArrow label="React" bg='white' borderRadius={20} boxShadow='0px 0px 10px 0px lightgray' color='black'><Image className={styles.techIcons}src='react.svg' height={7}/></Tooltip>
                    <Tooltip placement='top' hasArrow label="MongoDB" bg='white' borderRadius={20} boxShadow='0px 0px 10px 0px lightgray' color='black'><Image className={styles.techIcons} src='mongo.png' height={7}/></Tooltip>
                    </Box>
                </Box>
                </motion.div>

                <motion.div
                    variants={item}

                    style={{
                        zIndex: '5',
                        scale: 1,
                    }}
                    whileHover={{
                    color: 'red',
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 1 }}

                >
                    <Box zIndex={5} backdropFilter='auto' backdropBlur='10px' className={styles.project} height='350px'>
                    <Box className={styles.cardHeader}><BsFolder className={styles.folder}/><Box className={styles.rightIcons}><a rel="nofollow noopener noreferrer" href='https://github.com/jingkang97' target='_blank'><FiExternalLink className={styles.icon}/></a><a href='https://github.com/jingkang97' rel="nofollow noopener noreferrer" target='_blank'><FiGithub className={styles.icon}/></a></Box></Box>
                    <Box fontSize={{base: 30, md: 30, lg: 30}} className={styles.cardTitle}>Internal Tool </Box>
                    <Box mt={10} className={styles.cardBody}>
                    An internal tool for the marketing team
                    </Box>
                    <Box className={styles.tech}>
                    <Tooltip placement='top' hasArrow label="MaterialUI" bg='white' borderRadius={20} boxShadow='0px 0px 10px 0px lightgray' color='black'><Image className={styles.techIcons} src='mui.png' height={8}/></Tooltip>
                    <Tooltip placement='top' hasArrow label="React" bg='white' borderRadius={20} boxShadow='0px 0px 10px 0px lightgray' color='black'><Image className={styles.techIcons}src='react.svg' height={7}/></Tooltip>
                    <Tooltip placement='top' hasArrow label="Snowflake" bg='white' borderRadius={20} boxShadow='0px 0px 10px 0px lightgray' color='black'><Image className={styles.techIcons} src='snowflake.png' height={6}/></Tooltip>
                    <Tooltip placement='top' hasArrow label="fastAPI" bg='white' borderRadius={20} boxShadow='0px 0px 10px 0px lightgray' color='black'><Image className={styles.techIcons} src='fastapi.png' height={6}/></Tooltip>
                    </Box>
                </Box>
                </motion.div>
                
                <motion.div
                    variants={item}

                    style={{
                        zIndex: '5',
                        scale: 1,
                    }}
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 1 }}

                ><Box zIndex={5} backdropFilter='auto' backdropBlur='10px' className={styles.project} height='350px'>
                    <Box className={styles.cardHeader}><BsFolder className={styles.folder}/><Box className={styles.rightIcons}><a  rel="nofollow noopener noreferrer" href='https://github.com/jingkang97/Dashboard' target='_blank'><FiExternalLink className={styles.icon}/></a><a rel="nofollow noopener noreferrer" href='https://github.com/jingkang97/Dashboard' target='_blank'><FiGithub className={styles.icon}/></a></Box></Box>
                    <Box fontSize={{base: 30, md: 30, lg: 30}} className={styles.cardTitle}>DanceDance </Box>
                    <Box mt={10} className={styles.cardBody}>
                    A dashboard web application to visualise real time dance move stats and provide offline analytics
                    </Box>
                    <Box className={styles.tech}>
                    <Tooltip placement='top' hasArrow label="AntDesign" bg='white' borderRadius={20} boxShadow='0px 0px 10px 0px lightgray' color='black'><Image className={styles.techIcons} src='ant.svg' height={7}/></Tooltip>
                    <Tooltip placement='top' hasArrow label="React" bg='white' borderRadius={20} boxShadow='0px 0px 10px 0px lightgray' color='black'><Image className={styles.techIcons}src='react.svg' height={7}/></Tooltip>
                    <Tooltip placement='top' hasArrow label="MongoDB" bg='white' borderRadius={20} boxShadow='0px 0px 10px 0px lightgray' color='black'><Image className={styles.techIcons} src='mongo.png' height={7}/></Tooltip>
                    </Box>
                </Box>
                </motion.div>
                
                <Image zIndex={3} display={{base: 'none', sm:'none', md: 'flex', lg:'flex', xl:'flex'}} className={styles.donut}  h={{base: '250px', md: '300px', lg: '300px', xl: '400px'}} src='Design 05.svg' />
                <Image zIndex={4} className={styles.semi} filter={'blur(5px)'} h={{base: '100px', md: '200px', lg: '200px'}} src='Design 01.svg' />
                <Image zIndex={0} className={styles.swirl1}  h={{base: '100px', md: '150px', lg: '150px'}} src='Design 11.svg' />
                <Image zIndex={3} className={styles.swirl2} filter={'blur(5px)'}  h={{base: '50px', md: '100px', lg: '100px'}} src='Design 11.svg' />
                <Image zIndex={3} className={styles.hex1}   h={{base: '50px', md: '100px', lg: '100px'}} src='Design 12.svg' />
                <Image zIndex={3} className={styles.hex2}   filter={'blur(5px)'} h={{base: '50px', md: '100px', lg: '100px'}} src='Design 12.svg' />
                <Image zIndex={3} display={{base: 'none', sm:'none', md: 'none', lg:'none', xl:'flex'}} className={styles.diamond}  h={{base: '100px', md: '150px', lg: '150px'}} src='Design 02.svg' />
                <Image zIndex={3}  className={styles.tri3}  h={{base: '100px', md: '150px', lg: '150px'}} src='Design 06.svg' />
                <Image zIndex={3} display={{base: 'none', sm:'none', md: 'none', lg:'none', xl:'flex'}} className={styles.cylinder}  h={{base: '100px', md: '150px', lg: '150px'}} src='Design 03.svg' />
            </SimpleGrid>
            </motion.div>
            </Box>
         
        {/* Work Section*/}
        <Box id='experiences' mt={{base: 10, md: 20, lg: 20}} className={styles.section} >
            <div className={styles.test}>
            <Box display={'flex'} flexDirection='row' alignItems={'center'} fontSize='20px'><span className={styles.title2}>Experiences</span>💼</Box>
            <Box fontWeight={500} className={styles.subheading}>some places that I have worked at ...</Box>
            </div>
         </Box>
         <motion.div
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={container}
                    initial="hidden"
                    exit="hidden"
                >
        <Box className={styles.workContainer}>
            
            <Box zIndex={6} className={styles.marqueeContainer}>
                <Box zIndex={3} className={styles.marquee}>
                    <Image className={styles.logo} src='visa.svg' w={{base: '100px', sm:'100px', md:'150px', lg:'150px', xl:'200px'}}/>
                    <Image  className={styles.logo} src='lomotif.svg'  w={{base: '100px', sm:'100px', md:'150px', lg:'150px', xl:'200px'}}/>
                    <Image className={styles.logo} src='thales.svg'  w={{base: '100px', sm:'100px', md:'150px', lg:'150px', xl:'200px'}}/>
                    <Image display={{base: 'none', sm:'none', md:'none', lg:'block'}} className={styles.logo} src='visa.svg'  w={{base: '100px', sm:'100px', md:'150px', lg:'150px', xl:'200px'}}/>
                    <Image display={{base: 'none', sm:'none', md:'none', lg:'block'}} className={styles.logo} src='lomotif.svg'  w={{base: '100px', sm:'100px', md:'150px', lg:'150px', xl:'200px'}}/>
                    <Image display={{base: 'none', sm:'none', md:'none', lg:'block'}} className={styles.logo} src='thales.svg'  w={{base: '100px', sm:'100px', md:'150px', lg:'150px', xl:'200px'}}/>
                </Box>

                <Box zIndex={3} className={styles.marquee}>
                    <Image className={styles.logo} src='visa.svg'  w={{base: '100px', sm:'100px', md:'150px', lg:'150px', xl:'200px'}}/>
                    <Image className={styles.logo} src='lomotif.svg'  w={{base: '100px', sm:'100px', md:'150px', lg:'150px', xl:'200px'}}/>
                    <Image  className={styles.logo} src='thales.svg'  w={{base: '100px', sm:'100px', md:'150px', lg:'150px', xl:'200px'}}/>
                    <Image display={{base: 'none', sm:'none', md:'none', lg:'block'}} className={styles.logo} src='visa.svg'  w={{base: '100px', sm:'100px', md:'150px', lg:'150px',  xl:'200px'}}/>
                    <Image display={{base: 'none', sm:'none', md:'none', lg:'block'}} className={styles.logo} src='lomotif.svg'  w={{base: '100px', sm:'100px', md:'150px', lg:'150px', xl:'200px'}}/>
                    <Image display={{base: 'none', sm:'none', md:'none', lg:'block'}} className={styles.logo} src='thales.svg'  w={{base: '100px', sm:'100px', md:'150px', lg:'150px', xl:'200px'}}/>
                </Box>
            </Box>
            <Box h='300px' className={styles.work}>
                <Box className={styles.gradient2}></Box>
            </Box>
        </Box>
        </motion.div>
        
        {/* Footer */}
        <Box className={styles.footer}>
            © Designed and built by Ng Jing Kang
        </Box>
        
        </Box> 
    )
}

export default Page