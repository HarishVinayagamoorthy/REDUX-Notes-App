import Slider from './Components/Slider'
import Notes from './Components/Notes'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from './Components/Edit';
import { Navigate } from 'react-router-dom';
function App() {
 
  return (
    <> 
    
    <div className="container-fluid">
       <div className="row content">

        <BrowserRouter>
    
       <Slider/>
       
       <Routes>
      
        <Route path='notes' element={<Notes/>}/>
       
        <Route path ='edit/:id' element={<Edit/>}/>
        
        <Route path='/*' element={<Navigate to ='/notes'/>}/>
    
       </Routes>
       
       </BrowserRouter>
       </div>
       </div>
       
      
    </>
  )
}

export default App
