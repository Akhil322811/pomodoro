import './App.css';

import { Route,Routes } from 'react-router-dom';
import Timer from './components/timer';
import Home from './components/home';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Timer' element={<Timer/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
