import NavBar from './components/NavBar/NavaBar';
import Carousal from './components/Carousal/Carousal';
import UploadPage from './components/Upload/UploadPage';
import './App.css';


function App () {
  return (
    <div className="App">
      <NavBar />
      <Carousal />
      <UploadPage />
    </div>
  );
}

export default App;
