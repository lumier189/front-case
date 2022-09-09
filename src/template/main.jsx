import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import { useLocation } from "react-router-dom";

const Main = ({ children }) => {
    const { state } = useLocation();

    return (
        <>
            <Header />
            {state?.message && <div className={`alert alert-${state.type} m-0`} role="alert"><div className="container text-center">{state.message}</div></div>}
            <div style={{
                backgroundColor: '#e9ecef',
                minHeight: "calc(100vh - 115px)"
            }}>
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Main;
