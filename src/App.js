import './App.css';
import React, {useState} from 'react';
import Products from './Products';

const App =() => {
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const YOUR_APP_ID = "17aef588"
  const YOUR_APP_KEY = "786fc44ab21ca2b8dcb0b3cf13955bbb"	
  

  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=15&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(data => setData(data.hits))
  
  }

  return (
    <div>
      <center>
        <h1>Food Receipe</h1>
        <form onSubmit={submitHandler}>
          <input type="text" value ={search} onChange ={(e) => setSearch(e.target.value)} /> <br/> <br/>
          <input type="submit" className='btn btn-primary' value = "Search Here"/>
        </form>
        {data.length>=1 ? <Products data = {data}  /> : null}
      </center>
      
    </div>  
  );
}

export default App;
