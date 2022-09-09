import React from 'react';


function List({ characters, onNext, onPrevious}) {

    return (

        <div className='container py-5'>
            <h1 className='pb-5'>Informações sobre personagens de Star Wars</h1>
            <table className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Altura</th>
                        <th scope="col">Peso</th>
                        <th scope="col">Nascimento</th>
                    </tr>
                </thead>
                    <tbody>
                {characters.map((c) =>
                        <tr key={c.name}>
                            <td>{c.name}</td>
                            <td>{c.height} cm</td>
                            <td>{c.mass} kg</td>
                            <td>{c.birth_year}</td>
                        </tr>
                )}
                </tbody>
            </table>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-dark mx-3" style={{width:84}} onClick={(e)=>{onPrevious()}} >Voltar</button>
                    <button className="btn btn-dark" style={{width:84}} onClick={(e)=>{onNext()}}>Proximo </button>
                </div>
        </div>
    );
}

export default List;