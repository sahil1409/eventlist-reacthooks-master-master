import React from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { GlobalProvider } from './context/GlobalState';
import AboutUs from './components/AboutUs';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
   <Router>
   <Navbar title="Event Manager" aboutText="About US"/>
    {/* <GlobalProvider>
      <Main />
    </GlobalProvider> */}
    <Routes>
    <Route path="/aboutus" element={<AboutUs/>}>
    </Route>
    <Route path='/' element={<GlobalProvider>
      <Main />
    </GlobalProvider>}>
    
    </Route>
    </Routes>
   </Router>
    </>
  );
}

export default App;
