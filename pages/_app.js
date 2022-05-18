import { ChakraProvider } from "@chakra-ui/provider";
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
// import { NextUIProvider } from '@nextui-org/react';
import Page from ".";

function Website ({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </ChakraProvider> 

    )
}

export default Website