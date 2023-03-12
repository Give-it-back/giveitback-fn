import { useState } from "react";

export const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex].url})`
    }

    const sliderStyles ={
        height: '100%',
        position: 'relative'
    }

     const leftArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        left: '32px',
        fontSize: '45px',
        color: '#000',
        zIndex:1,
        cursor: 'pointer',
        backgroundColor: '#ffffff'
     }
     const rightArrowStyles = {
        position: 'absolute',
        top: '50%',
        transform: 'translate(0, -50%)',
        right: '32px',
        fontSize: '45px',
        color: '#000',
        zIndex:1,
        cursor: 'pointer',
        backgroundColor: '#ffffff'
     }


     const goToPreviousSlide = ()=>{
        const isFirstSlide = currentIndex ===0;
        const newIndex = isFirstSlide?slides.length - 1: currentIndex - 1;
        setCurrentIndex(newIndex);
     }


     const goToNextSlide = ()=>{
        const isLastSlide = currentIndex ===slides.length -1;
        const newIndex = isLastSlide?0: currentIndex + 1;
        setCurrentIndex(newIndex);
     }

     const dotsContainerStyles = {
        display: 'flex',
        justifyContent: 'center',
     };

     const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '50px',
        
     };

     const goToSlide = slideIndex => {
        setCurrentIndex(slideIndex)
     }
      

     const color={
        color: 'black',
        fontSize: '40px',
     }
  return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles}  onClick= {goToPreviousSlide}>&#xf104;</div>
        <div style={rightArrowStyles} onClick= {goToNextSlide}>  &#xf105;</div>
        <div style={slideStyles} className="flex justify-center items-center font-bold">
            <h2 style={color}>Image content</h2>
        </div>
        <div style={dotsContainerStyles}>
            {slides.map((_slide, slideIndex)=>
            (<div key={slideIndex} style= {dotStyles} onClick ={()=> goToSlide(slideIndex)}>.</div>))}
        </div>
    </div>
  )
}
