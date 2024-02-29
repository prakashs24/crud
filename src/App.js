
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Update from './Update';
import Create from './Create';
import Read from './Read'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Create' element={<Create />}></Route>
      <Route path='/Update/:id' element={<Update />}></Route>
      <Route path='/Read/:id' element={<Read />}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
