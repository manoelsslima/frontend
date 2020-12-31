import React, { useState } from 'react';

import Header from './components/Header';

import './App.css';
import backgroundImage from './assets/background.jpeg';

/**
 * Pra retornar mais de uma linha, usa-se parênteses
 */
function App() {
    // desestruturação
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
    // useState retorna um array com duas posições:
    // 1 - Variável com o seu valor inicial
    // 2 - Função para atualizar esse valor
    function addProject() {
        //projects.push(`Novo projeto ${Date.now}`);
        //
        // operador spread: copia o array
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
        console.log(projects);
    }
    return (
        <>
            <Header title="Projects"/>

                <img width={300} height={300} src={backgroundImage} />
                <ul>
                   {projects.map( project => (
                       <li key={project}>{project}</li>
                   ))}
                </ul>
                <button type="button" onClick={addProject}>Adicionar projeto</button>
        </>
    );
}

export default App;