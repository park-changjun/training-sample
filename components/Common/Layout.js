import React from 'react'
import Header from '../Header';
import Footer from '../Footer';
import Chat from './Chat';

const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
        <Chat />
    </div>
  )
}

export default Layout
