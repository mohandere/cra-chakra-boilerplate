import React from 'react'
import { Outlet, ReactLocation, Router } from 'react-location'
import { routes } from './routes'
import { ChakraProvider, Container } from '@chakra-ui/react'
import theme from './theme'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/700.css'
import { Header } from './Header'

// Set up a ReactLocation instance
const location = new ReactLocation()

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" py="12">
        <Router location={location} routes={routes}>
          <Header />
          <Outlet />
        </Router>
      </Container>
    </ChakraProvider>
  )
}
