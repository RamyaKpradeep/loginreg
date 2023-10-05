import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Regisration from './components/Regisration';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
      <div className="outer">
        <div className="inner">
          <Navbar />
          <Regisration />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;












































































































