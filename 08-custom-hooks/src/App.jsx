
import usefetch from "./Usefetch";

const App = () => {
  
  const [data] = usefetch('https://jsonplaceholder.typicode.com/posts');
  return (
    <div>
      {
        data.map((items) =>(
          <li key={items.id}>Title: {items.title}</li>
        ))
      }
    </div>
  )
}

export default App