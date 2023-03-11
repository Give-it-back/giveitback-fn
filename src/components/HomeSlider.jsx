import React from 'react'
import { ImageSlider } from './ImageSlider'

const HomeSlider = () => {

    const slides = [
        
        {url: 'https://picsum.photos/id/1/300/400', title: 'Beach'},
        {url: 'https://picsum.photos/id/2/300/400', title: 'Boat'},  
        {url: 'https://picsum.photos/id/3/300/400', title: 'Forest'},
        {url: 'https://picsum.photos/id/4/300/400', title: 'City'},
        {url: 'https://picsum.photos/id/5/300/400', title: 'Italy'},
    ]

    const ContainerStyles ={
        width: '500px',
        height: '280px',
        margin: '0 auto',
        backgroundColor: '#fff',
    }

  
  return (
    <div>
        <h1>Image slider component</h1>
        <div style={ContainerStyles}>
        <ImageSlider slides = {slides}/>
        </div>

    </div>
  )
}

export default HomeSlider