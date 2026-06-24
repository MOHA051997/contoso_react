import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import Menu from './Menu';

function Layout() {
  return (
    <div className='layout'>
      <Header/>
      <Menu/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default Layout;

