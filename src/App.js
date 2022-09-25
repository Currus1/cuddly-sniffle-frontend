import {React} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './UIcomponents/HeaderComponent';
import FooterComponent from './UIcomponents/FooterComponent';
import BackendComponent from './BackendComponents/BackendComponent';
import PlanningComponent from './UIcomponents/PlanningComponent';

function App() {
  return (
    <div className="CurrusApp">
        <BrowserRouter>
                <HeaderComponent></HeaderComponent> 
                <Routes>
                    <Route path ="/backend" element={<BackendComponent/>}/>
                    <Route path ="/planning" element={<PlanningComponent/>}/>
                </Routes>
                <FooterComponent></FooterComponent>
        </BrowserRouter>
    </div>
  );
}

export default App;

