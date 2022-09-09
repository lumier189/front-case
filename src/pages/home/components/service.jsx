import React from 'react';
import { Link } from 'react-router-dom';


function ServiceCard({ ...rest }) {    
    return (
        <div {...rest}>
            <Link to="/service" className=" text-dark" style={{ textDecoration: "none", text: "black" }}>
                <div className="card flex-md-row box-shadow h-md-250">
                    <div className="card-body d-flex flex-column align-items-start">
                        <strong className="d-inline-block mb-2 text-success">Task front 3</strong>
                        <h3 className="mb-0">
                            <span className="text-dark btn-link">Request API</span>
                        </h3>
                        <div className="mb-1 text-muted">9 Setembro</div>
                        <p className="card-text mb-auto">O universo Star Wars nunca esteve tão perto! Consumo de uma api para encontrar seus personagens favoritos.</p>
                    </div>
                    <img className="card-img-right flex-auto d-none d-md-block" data-src="holder.js/200x250?theme=thumb" style={{maxWidth:200, height:250}} alt="Thumbnail [200x250]"  src="../../img/startwars.jpg" data-holder-rendered="true" />
                </div>
            </Link>
        </div>
    );
}

export default ServiceCard;