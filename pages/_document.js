import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" style={{scrollBehavior:'smooth'}}>
        <Head>
        <script src="three.min.js"></script>
        <script src="TweenMax.min.js"></script>
        <script src="dist/hover.umd.js"></script>
        <link href="http://fonts.cdnfonts.com/css/mark-pro" rel="stylesheet"/>
        <link href="http://fonts.cdnfonts.com/css/fenwick" rel="stylesheet"></link>
        <link href="http://fonts.cdnfonts.com/css/goffik-outline" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" /> 
<link rel="preconnect" href="https://fonts.gstatic.com" /> 
<link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800;8..144,900;8..144,1000&display=swap" rel="stylesheet"></link>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}