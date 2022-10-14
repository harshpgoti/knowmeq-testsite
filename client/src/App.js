import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/Home';
import DataForm from './components/DataForm'
import Test from './components/Test';
import NotFound from './components/404';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route> 
          <Route path="dataForm/:id" element={<DataForm />} />
          <Route path="tests/:id" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
