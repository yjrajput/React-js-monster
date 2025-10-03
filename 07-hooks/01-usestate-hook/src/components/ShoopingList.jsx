import React, { useState } from 'react'

const ShoopingList = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    
    const handleOnSubmit = (event) =>{
        event.preventDefault();

        const newItems = {
            name, price: parseInt(price)
        }

        setItems([...items, newItems]);

        setName('')
        setPrice('')
    }

  return (
    <div>
        <form onSubmit={handleOnSubmit}>
            <input type="text" placeholder='Items' value={name} onChange={(e)=> setName(e.target.value)} />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

            <button type='submit'>Submit</button>
        </form>

        <ul>
            {
                items.map((items, index) =>(
                    <div key={index}>
                        <h1>{items.name}</h1>
                        <h1>{items.price}</h1>
                    </div>
                ))
            }
        </ul>
    </div>
  )
}

export default ShoopingList