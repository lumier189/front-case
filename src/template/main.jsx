import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
const Main = ({children}) => {
    return ( 
        <>
        <Header/>
        { children }
        <Footer/>
        </>
     );
}
 
export default Main;
