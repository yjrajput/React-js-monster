import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Meals.module.css'
const Meals = () => {
    const [data, setData] = useState([]);

    useEffect(() =>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((res) => {
            setData(res.data.meals)
        }).catch(err =>{
            console.log(err)
        })
    })
  return (
    <div className={styles.container}>
        {
            data.map((items) =>(
                <div className={styles['output-container']} key={items.idMeal}>
                    <img src={items.strMealThumb} alt="images" />
                    <div className={styles['info-container']}>
                        <p>{items.strMeal}</p>
                        <p>{items.idMeal}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Meals