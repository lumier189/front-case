import React from 'react';
const Footer = () => {
    return (

        <footer className=" py-3 bg-dark border-top">
            <div className="container d-flex flex-wrap justify-content-between align-items-center">

         
            <div className="col-md-4 d-flex align-items-center">
                
                <span className="text-muted">© 2021 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">                
                <li className="ms-3"><a className="text-muted" href="https://www.linkedin.com/in/luis-eduardo-silva-8583a1247/"> <img src="../../img/linkedin.png" width="24" height="24" alt="" /> </a></li>
                
                <li className="ms-3"><a className="text-muted" href="https://github.com/lumier189"> <img src="../../img/github.png" width="24" height="24" alt="" /></a></li>
            </ul>
            </div>
        </footer>

    );
}

export default Footer;
