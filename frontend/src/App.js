import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainContent from './components/FunctionPage/MainContent';



function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/main" element={ <MainContent /> } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
