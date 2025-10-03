import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Usefetch = (url) => {
    const [data, setdata] = useState([]);

    useEffect(() =>{
        fetch(url)
        .then(res => res.json())
        .then(data => setdata(data))
    }, [])
  return[data]
}

export default Usefetch