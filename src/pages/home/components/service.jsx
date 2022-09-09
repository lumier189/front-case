import React from 'react';
import { Link } from 'react-router-dom';


function ServiceCard({ ...rest }) {    
    return (
        <div {...rest}>
            <Link to="/service" className=" text-dark" style={{ textDecoration: "none", text: "black" }}>
                <div className="card flex-md-row box-shadow h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-success">task front 2</strong>
                        <h3 className="mb-0">
                            <a className="text-dark">Api Consumer</a>
                        </h3>
                        <div className="mb-1 text-muted">Nov 11</div>
                        <p className="card-text mb-auto">Cosumo de uma api externa com react e boostrap</p>
                    </div>
                    <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" style={{maxWidth:200, height:250}} alt="Thumbnail [200x250]"  src="../../img/startwars.jpg" data-holder-rendered="true" />
                </div>
            </Link>
        </div>
    );
}

export default ServiceCard;