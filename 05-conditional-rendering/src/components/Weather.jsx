import React from 'react'

const Weather = ({tempreture}) => {
  return (
    <div>
        {
            tempreture < 15 ? <h1>Its cold outside</h1> : tempreture >= 15 && tempreture < 25 ? <h1>Its nice outside</h1> : tempreture >= 25 ? <h1>Its hot outside</h1> : tempreture
        }
    </div>
  )
}

export default Weather