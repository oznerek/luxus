import React from "react";
import SingleCarCard from "./singleCarCard";
import modelsCar from "./modelsData";



const CarModels = () => {
    let renderCarsCard = (modelsCar.modelsCar.map(element => {
        return (<SingleCarCard modeldata={element} key={element.name}/>)
    }))
  return (
    <section className="carModels">
        
      {renderCarsCard}
    </section>
  );
};

export default CarModels;
