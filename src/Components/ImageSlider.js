import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://imgs.6sqft.com/wp-content/uploads/2016/10/14160508/nypl-book-stacks1-1024x619.jpg"
                        alt=""
                    />
                </Carousel.Item>
               
            </Carousel>
        </div>
    )
}
export default ImageSlider