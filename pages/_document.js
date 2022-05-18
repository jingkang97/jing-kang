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
        {/* <link href="http://fonts.cdnfonts.com/css/mark-pro" rel="stylesheet"/> */}
        <link href="http://fonts.cdnfonts.com/css/fenwick" rel="stylesheet"></link>
        <link href="http://fonts.cdnfonts.com/css/goffik-outline" rel="stylesheet" />
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