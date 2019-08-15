import React from "react";
import Navigation from './components/navigation';
import CarModels from './components/carModels/carModels';
import Footer from './components/footer';
function App() {
    return (
      <div className="app grid">
        <Navigation />
        <CarModels/>
        <Footer />
      </div>
    );
  }
  
  export default App;