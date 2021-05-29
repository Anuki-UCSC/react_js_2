import React from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Ishan from './components/Ishan';
import Newlist from './components/Newlist';
import Home from './components/NavBar/Home';
import About_us from './components/NavBar/About_us';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
     <Switch>
       
       <Route path='/about'>
        <About_us/>
        </Route>

        <Route path='/newlist'>
        <Newlist/>
        </Route>

       <Route path="/">
       <Home/>
       </Route>

     </Switch>

     

        
        

      </BrowserRouter>
    </div>
    
  );
}

export default App;
