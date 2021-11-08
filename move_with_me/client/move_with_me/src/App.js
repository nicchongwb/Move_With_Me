import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {Home} from './Components/Home/Home'


function App() {
  
  const [home, setHome] = useState([]);
  const url = '/home';

  useEffect(()=>{
    fetch(url, {
      'methods':'GET',
    headers:{
      'Content-Type':'application/json'
    }
  })
  .then(response => response.json())
  .then(response => setArticles(response))
  .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
