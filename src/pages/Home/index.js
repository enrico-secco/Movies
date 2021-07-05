import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.css'

export default function Home() {

    const [ filmes, setFilmes] = useState([]);


    useEffect( () => {
        loadFilms();
    },[])

    function loadFilms(){ //fez essa função pra ter mais controle sobre a requisição, a função é responsável só pela requisição.
        let url = 'http://sujeitoprogramador.com/r-api/?api=filmes/'

        fetch(url).
        then( (res) => res.json()).
        then( (resJson) => {
            setFilmes(resJson)
           // console.log(resJson)
        } )
    }

  return (
    <div className="container" >

        <div className="filmList">
            {filmes.map((filme) => {
                return(
                    <article key={filme.id} className="filme">
                        <strong> {filme.nome}</strong>
                        <img src={filme.foto} alt="Capa" />
                        <Link to={`/filme/${filme.id}`}> Acessar</Link>  
                        {/* link dinâmico com o id, passa o id como parte da URL (que pega na página filme) */}
                    </article>
                )
            })}

        </div>
      
    </div>
  );
}

