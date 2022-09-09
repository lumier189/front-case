import React from 'react';
const Footer = () => {
    return (

        <footer className=" py-3 bg-dark border-top">
            <div className="container d-flex flex-wrap justify-content-between align-items-center">

         
            <div class="col-md-4 d-flex align-items-center">
                
                <span className="text-muted">© 2021 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">                
                <li className="ms-3"><a class="text-muted" href="#">a<svg class="bi" width="24" height="24"></svg></a></li>
                <li className="ms-3"><a class="text-muted" href="#">as<svg class="bi" width="24" height="24"></svg></a></li>
            </ul>
            </div>
        </footer>

    );
}

export default Footer;
