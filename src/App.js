import React from 'react';
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageDetails from './components/ImageDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import List from './components/List';
function App() {
  return (
    <main>
       <section>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/list" element={<List/>}/>
        </Routes>
        <Footer />
      </Router>
      </section>
    </main>
  );
}

export default App;
