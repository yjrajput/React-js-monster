import React, { useState } from 'react'
import styles from './Testimonial.module.css'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const description = [
        {
            quote: 'This is the best product i ever used!',
            aurthor: 'Jhon Due'
        },
        {
            quote: 'I highly recommended this product to everyone',
            aurthor: 'Devid lama'
        },
        {
            quote: 'This product is very usefull',
            aurthor: 'Lana del rey'
        }
    ]

    const handlePrev = () =>{
        setCurrentIndex((currentIndex + description.length - 1 ) % description.length) 
    }
    const handleNext = () =>{
        setCurrentIndex((currentIndex + 1) % description.length)
    }
  return (
    <div className={styles.container}>
        <div className={styles['testimonial-container']}>
        <div className={styles['testemonial-quote']}>
            {
                description[currentIndex].quote
            }
        </div>
        <div className={styles['testimonial-aurthor']}>
            {
                description[currentIndex].aurthor
            }
        </div>

        <div className={styles['testimonial-btn']}>
            <button onClick={handlePrev}>Prev</button>
            <button onClick={handleNext}>Next</button>
        </div>
        </div>
    </div>
  )
}

export default Testimonial