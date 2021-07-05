import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './style.css'

export default function Filme(){

    const [filme, setFilme] = useState([]);


    let { id } = useParams(); {/* pega o id do filme como parâmetro da URL*/}
    {/* desconstriu um objeto, useParams() é uma função Hooks pra acessar partes dinâmicas da URL, que não pode ir dentro do useEffect
    se não dá erro de Hooks dentro de Hooks  */}

    useEffect( () => {
        let url = `http://sujeitoprogramador.com/r-api/?api=filmes/${id}`; {/* pega o id recebido da URL*/}

        fetch(url)
        .then( (res) => res.json())
        .then( (resJson) => {
            setFilme(resJson)
            console.log(resJson)
        })
    }, [])

    return(
        <div className="filme-info">  
            {/* Não precisa do map por ter só um filme dentro, recebeu um objeto com os dados do filme. */}
                <h1>{filme.nome}</h1>
                <img src={filme.foto} />
                {filme.length !== 0 && 
                 <h3>Sinopse</h3> }   {/* Para renderizar junto, porque por não vir de uma requisição, renderizava primeiro */}
                {filme.sinopse}
        </div>
    )
}