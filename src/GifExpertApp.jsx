import React, { useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid.jsx';
import './index.css'
import 'animate.css';

const GifExpertApp = () => {


    const [categories, setCategories] = useState(['Elden Ring'])

    return ( 

        <>

            <h2 >GifExpertApp</h2>
            <AddCategory setCategories= { setCategories }/>
            <hr></hr>

            {/* <button onClick={ handleAdd } >Agregar</button> */}

            <ul>
                { 
                categories.map( category=> 
                    <GifGrid
                        key = { category }
                        category = { category }
                    />
                    )     
                }
            </ul>

        </>

     );
}

export default GifExpertApp;