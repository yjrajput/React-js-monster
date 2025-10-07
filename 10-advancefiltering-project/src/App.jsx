import { useState } from 'react'
import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'



const App = () => {

  // const [selectedCategory, setSelectedCategory] = useState(null);

  // //input filtering
  const [query, setQuery] = useState('');
  // const handleOnChnage = (event) => {
  //   setQuery(event.target.value);
  // }

  // const filteredItems = () =>{
  //   products.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1))
  // }

  // //radio filter
  // const handleChange = (event) =>{
  //   setSelectedCategory(event.target.vlaue);
  // }

  // //button filter
  // const handleOnClick = (event) =>{
  //   setSelectedCategory(event.target.vlaue);
  // }


  // //filter function
  // const filterData = (products, selected, query) =>{
  //   let filterProducts = products;

  //   if(query){
  //     filterProducts = filteredItems;
  //   }

  //   if(selected){
  //     filterProducts = filterProducts.filter(({category,color,company,newPrice,title }) =>
  //       category === selected ||
  //       color === selected ||
  //       company === selected ||
  //       newPrice === selected ||
  //       title === selected

  //     )
  //   }

  //   return filterProducts.map(({img,title,star,review,prevPrice, newPrice}) =>(
  //     <Cart img = {img} title = {title} star = {star} review = {review} prevPrice = {prevPrice} newPrice = {newPrice} />
  //   ))
  // }
  return (
    <>
      <Sidebar/>
      <header>
        <Nav query = {query} setQuery = {setQuery}/>
      </header>
      <main>
        <Recommended />
        <Products query = {query}/>
      </main>
    </>
  )
}

export default App