import React  from 'react';
import { useState } from 'react';
import './App.css';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';

import Home from './componets/Home';

function App(){

return(
  <>
 <Home/>
<Routes>
<Route path='/Home' element={Home} />


</Routes>

 


  
  </>
)
}

export default App;






