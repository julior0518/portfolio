import './styles/App.css';
import { useState } from 'react'
import Main from './pages/Main';
import About from './pages/About';
import Skillz from './pages/Skillz';
import Work from './pages/Work';
import Contact from './pages/Contact';


function App() {
  const [page,setPage] = useState('app')

  return (
    <div className="App">
        <Main page={page} setPage={setPage} />
        <About />
        <Skillz />
        <Work />
        <Contact />
        
    </div>
  );
}

export default App;
