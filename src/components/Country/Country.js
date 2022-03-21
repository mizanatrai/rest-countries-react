import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div>
            <h1>Country name: {props.name}</h1>
            <p>Population: {props.population}</p>
            <h3>Land area: {props.area} Square K.M</h3>
        </div>
    );
};

export default Country;