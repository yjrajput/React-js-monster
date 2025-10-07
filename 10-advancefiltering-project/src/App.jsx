import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

const App = () => {
  return (
    <>
      <Sidebar/>
      <header>
        <Nav/>
      </header>
      <main>
        <Recommended/>
        <Products/>
      </main>
    </>
  )
}

export default App