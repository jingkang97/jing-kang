import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#FEFEFE', '#0B0F20')(props),
    }
  }),
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        // textDecoration: 'underline',
        fontSize: 40,
        // textUnderlineOffset: 6,
        fontWeight: 'bold',
        textDecorationColor: '#525252',
        textDecorationThickness: 5,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Button :{
    baseStyle: props => ({
      font: 'Mark Pro'
      // border: 'solid 2px white'
    })
  }
  // Link: {
  //   baseStyle: props => ({
  //     color: mode('#3d7aed', '#ff63c3')(props),
  //     // textUnderlineOffset: 3
  //   })
  // }
}

// const textStyles = {
//   h1: {
//     letterSpacing: '30%'
//   }
// }

const fonts = {
  heading: 'Mark Pro',
  body: 'Mark Pro',
}

const colors = {
  grassTeal: '#88ccca',
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({ config, styles, components, fonts, colors })
export default theme