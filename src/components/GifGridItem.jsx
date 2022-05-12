import React from 'react';
import 'animate.css';
import PropTypes from 'prop-types';

export const GifGridItem = ({ id, title, img_url }) => {


  return (
    <div className='card animate__animated animate__bounceIn'>
        <img src={ img_url } alt= { title }/>
        <p> {title} </p>
    </div>
  )
}


GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired
}

