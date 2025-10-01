import React from 'react'
import UserList from './components/UserList';
import ProductList from './components/ProductList';

const App = () => {
  const lists = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50];
  const users = [
    {id: 1, name: 'jhon', age: 22},
    {id: 2, name: 'david', age: 34},
    {id: 3, name: 'ben', age: 39}
  ];
  const products = [
    {id: 1, name: 'laptop', price: 1500},
    {id: 2, name: 'Head-phone', price: 300},
    {id: 3, name: 'Mobile', price: 1000},
  ]
  return (
    <div>
      {
        lists.map((items, index) =>(
          <li key={index}>{items}</li>
        ))
      }
      <hr />
      <UserList users = {users}/>
      <hr />
      <ProductList products = {products}/>
    </div>
  )
}

export default App