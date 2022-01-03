import { extendTheme } from '@chakra-ui/react'
// import { mode } from '@chakra-ui/theme-tools';

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

// const styles = {
//   global: props => ({
//     body: {
//       color: mode('gray.500', 'whiteAlpha.900')(props),
//       bg: mode('red.500', '#141214')(props),
//     },
//   }),
// };

// const components = {
//   Drawer: {
//     // setup light/dark mode component defaults
//     baseStyle: props => ({
//       dialog: {
//         bg: mode('white', '#141214')(props),
//       },
//     }),
//   },
// };

const theme = extendTheme({ 
  config,
  // components,
  // styles
})

export default theme