import logo from './logo.svg';
import './App.css';
import MemoComp from './components/MemoComp';
import LikeComp from './components/LikeComp';
import Header from './components/Header';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element={<MemoComp/>} />
            <Route path='/like' element={<LikeComp/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
