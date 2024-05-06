
import './App.css'
import Recipe from './component/Recipe'
import recipe from './component/recipe.css'
import image1 from './image1.jpeg' 

function App() {
  return (
    <div className="App">
      <div className='image'>
        <img src={image1} alt=""/>
      </div>
       <Recipe />
    </div>
  );
}

export default App;
