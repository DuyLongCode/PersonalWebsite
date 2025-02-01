/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import { DuyLongNavigation } from './components/Navigation.jsx';
import Personal from './pages/Personal.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';

function Heading(){
  return <h1>Hello I am Long</h1>
}

export default function MyApp(){
  return (
    <BrowserRouter>
    <DuyLongNavigation/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Personal" element={<Personal/>} />
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <MyApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

