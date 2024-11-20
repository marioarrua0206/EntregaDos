
import './App.css'


import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import ItemDetailContainer from './components/itemdetailcontainer/ItemDetailContainer';
import NoPage from './components/nopage/NoPage';
import Navbar from './components/navbar/Navbar';


import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {


  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>}>
            <Route index element={<ItemListContainer/>} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer/>} />
            <Route path='/detail/:categoryId' element={<ItemDetailContainer/>} />
            <Route path='*' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App


