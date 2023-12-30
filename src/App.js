
import './App.css';
import Edition from './components/Edition';
import { Route, Routes } from 'react-router-dom';
import More from './components/More';
import QuranSearch from './components/QuranSearch';
import Home from './components/Home';
import Juz from './components/Juz';
import Ayah from './components/Ayah';
import Voice from './components/Voice';

function App() {
  return (
    <div className="App">

  
      <Routes >
        
        <Route path='/' element={ <Home />} />
        <Route path='/edition' element={ <Edition />} />
        <Route path='/ayahs/:surahNumber' element={ <More/>} />
        <Route path='/search' element={ <QuranSearch/>} />
        <Route path='/juz' element={ <Juz/>} />
        <Route path='/ayah' element={ <Ayah/>} />
        <Route path='/voice' element={ <Voice/>} />
        
        
        
        
      
       
    
      </Routes>




    </div>
  );
}

export default App;
