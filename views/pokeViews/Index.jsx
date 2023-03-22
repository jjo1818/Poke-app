import React from 'react'
const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
    
    function Index (props) {
    return (
        <div >
        <h1 style={myStyle}>See All The Pokemon!</h1>
       <ul>
            {props.pokemons.map((pokemon, index) => 
                <li key={index}>
                    <a href={`/pokemon/${pokemon._id}`}><strong>{pokemon.name}</strong></a>
                </li>
            )}
        </ul> 
        <a href="/pokemon/new">Add...</a>
     </div>
    )
}

export default Index