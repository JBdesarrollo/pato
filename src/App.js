
import './App.css';
import Menu from './Components/Menu';
import {Router, Route, Routes} from 'react-router-dom';
import Play from './Components/Play';

function App() {
  return (
    
        <Routes>
          <Route path='/' element={<Menu />}/>
          <Route path='/play' element={<Play />}/>
        </Routes>
  );
}

export default App;
