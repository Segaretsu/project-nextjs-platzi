import React, { PropsWithChildren } from 'react'
import { Container } from 'semantic-ui-react'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'


const Layout = ({ children }) => (
  <>
    <Navbar />
    <Container as="main" text>
      {children}
    </Container>
    <Footer />
  </>
)

export default Layout
