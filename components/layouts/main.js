import { Box, Container } from "@chakra-ui/react";
import Navbar from '../navbar.js'
import Head from "next/head";

const Main = ({ children, router }) => {
    return (
        <Box>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Ng Jing Kang - Homepage</title>
            </Head>
            
            {/* <Navbar path={router.asPath} /> */}
            <Navbar />
            <Box 
            // w={'100%'}
            // bg='red'
                h='100%'
                // overflow={'scroll'}
                // maxW="container.md"
                // h="100vh"
                // width='100%'
                // maxW="100%"
                // pt={20}
                // overflowX={'hidden'}
            >
                {children}
            </Box>
        </Box>
    )
}

export default Main