import React, { useState } from 'react'
import './Carousel.css'

const Carousel = (props) => {
    const { children } = props

    const [currentIndex, setCurrentIndex] = useState(1)
    const [isTransitioning, setIsTransitioning] = useState(false);

    const next = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (currentIndex === 0) {
            setCurrentIndex(children.length);
        } else if (currentIndex === children.length + 1) {
            setCurrentIndex(1)
        }
    }

    const jump = (index) => {
        if (!isTransitioning && index !== currentIndex) {
            setIsTransitioning(true);
            setCurrentIndex(index);
        }
    }


    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <button onClick={prev} className="left-arrow">
                    <i class="fa-solid fa-chevron-left"></i>
                </button>
                <div
                    className="carousel-content-wrapper"
                >
                    <div
                        className={`carousel-content`}
                        style={{
                            transform: `translateX(${(-currentIndex) * (100)}%)`,
                            transition: isTransitioning ? 'all 400ms ease-out' : 'none',
                        }}
                        onTransitionEnd={() => handleTransitionEnd()}
                    >
                        {children[children.length - 1]}
                        {children}
                        {children[0]}
                    </div>
                </div>
                <button onClick={next} className="right-arrow">
                    <i class="fa-solid fa-chevron-right"></i>
                </button>
                <div className="dots">
                    {children.map(function (object, i) {
                        return <div className={
                            ((i === 0 && currentIndex === children.length + 1) ||
                                (i === children.length - 1 && currentIndex === 0) ||
                                (i + 1 === currentIndex)) ? 'active' : ''} onClick={() => jump(i + 1)} key={i}></div>;
                    })}
                </div>
            </div>
        </div>
    )
}

export default Carousel;