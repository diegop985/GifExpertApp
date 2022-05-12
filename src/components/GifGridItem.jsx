import React from 'react';
import 'animate.css';


export const GifGridItem = ({ id, title, img_url }) => {


  return (
    <div className='card animate__animated animate__bounceIn'>
        <img src={ img_url } alt= { title }/>
        <p> {title} </p>
    </div>
  )
}


