import React from "react";

function Jumbotron({profile}) {
    console.log(profile)
    return (
        <div className="col-12 mb-4">
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">Welcome {profile.name}</h1>
                    <p className="lead my-3">case feito para vaga full-stack junior Contemplato</p>
                </div>
            </div>
        </div>
    );
}

export default Jumbotron;

