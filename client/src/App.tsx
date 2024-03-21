import React from 'react';
import './App.css';
import NavBar from './components/ui/Navbar';
import Footer from './components/ui/Footer';

function App(): JSX.Element {
  return (
    <div className="App">
      <NavBar />
      <h1>Hello, world!</h1>
      <Footer />
    </div>
  );
}

export default App;
