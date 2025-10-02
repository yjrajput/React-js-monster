import './App.css'
import External from './components/External.jsx'

const App = () => {
  // internal styling
  let styles = {
    backgroundColor: 'brown',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '10px'
  }
  return (
    <div>
      {/* inline sytling */}
      <h1 style={{color: 'red'}}>Hello wolrd!</h1>
      <p style={{backgroundColor: 'crimson', color: 'white', padding: '10px', borderRadius: '10px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, esse. Alias corporis assumenda cupiditate hic esse odio ex! Iusto tenetur cumque quam sapiente! Praesentium enim esse voluptatibus ut nesciunt voluptates!</p>
      <button style={styles}>Learn more</button>
      <hr />

      <div>
        <External/>
      </div>
    </div>
  )
}

export default App