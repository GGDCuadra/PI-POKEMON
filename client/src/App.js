import './App.css';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LangingPage'
import { Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <h1>Henry Pokemon</h1> */}
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
