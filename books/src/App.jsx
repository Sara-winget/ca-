
import './App.css'
import RegForm from './Components/RegForm'
import Book from './Components/Books';
import { Routes,Route } from 'react-router-dom';
function App() {
  

  return (
    <>
   <Routes>
    <Route path="/" element={<Book/>}/>
    <Route path="/form" element={<RegForm/>}/>
   </Routes>
    </>
  )
}

export default App
