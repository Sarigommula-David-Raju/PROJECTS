import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import Example from './Example.js';
import Todo from './Todo.js';
import Project from './Project.js';
import Weather from './Weather.js';
import Paytm from './Paytm.js';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


// Link for react-icons
// https://react-icons.github.io/react-icons/





function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Project />}/>
        <Route path='/todoapp' element={<Todo />} />
        <Route path='/weatherapp' element={<Weather />} />
        <Route path='/paytm' element={<Paytm /> } />
      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
