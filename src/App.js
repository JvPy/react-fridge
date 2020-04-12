import React from 'react';
import Root from './components/Root/Root';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './App.css'

function App() {
  return(
    <div className="flex-column">
      <Navbar />
      <Root />
      <Footer />
    </div>
  )
}
export default App;
