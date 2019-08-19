import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./components/navigation";
import CarModels from "./components/carModels/carModels";
import Footer from "./components/footer";
import Offer from "./components/offer";
import UsedCars from "./components/usedCars";
import Discover from "./components/discover";
import OwershipLexus from "./components/owershipLexus";

function App() {
  return (
    <div className="app grid">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Route path="/" exact component={CarModels} />
        <Route path="/offer" exact component={Offer} />
        <Route path="/discover" exact component={Discover} />
        <Route path="/usedCars" exact component={UsedCars} />
        <Route path="/owership" exact component={OwershipLexus} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
