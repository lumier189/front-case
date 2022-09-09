import React from 'react';


function List({ personagem }) {

    return (

        <div className='container py-5'>
            <h1 className='pb-5'>Start Wars characters info</h1>
    <table class="table table-dark table-striped">
            <thead>
            <tr>               
                <th scope="col">Name</th>
                <th scope="col">Height</th>
                <th scope="col">Mass</th>
                <th scope="col">Birth Year </th>
            </tr>
            </thead>
            {personagem.map((p) =>            
            <tbody>
            <tr>
                     
                <td>{p.name}</td>
                <td>{p.height}</td>
                <td>{p.mass}</td>
                <td>{p.birth_year}</td>
            </tr>
            </tbody>
            )}

            </table>    
        </div>
    );
}

export default List;