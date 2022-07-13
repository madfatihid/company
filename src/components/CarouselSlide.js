// import React, { useState } from 'react'
import './CarouselSlide.css'

const CarouselSlide = (props) => {
    const { image, description } = props
    return (
        <div class="container">
            <img src={image} alt={description} style={{ width: '100%' }} />
            <div class="text-block">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default CarouselSlide;