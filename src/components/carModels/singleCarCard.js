import React from 'react';

export default class CarCards extends React.Component {
    render() {
        let car = this.props.modeldata
        return (
            <div className="carCard">
                <div className="carCard__header">
                    <div className="carCard__header-name" >{car.name}</div>
                    <div className="carCard__header-price"> OD: {car.price} zl </div>
                </div>
                <div className="carCard__headerSmall"> {car.smallHeader}</div>
                <div className="carCard__headerSmall"> Juz od {car.leasingPrice} zl netto/misiac  w leasingu smartplan</div>
                <img className='carCard__picture'src={car.picture} alt ={car.name} />
                <div className="carCard__headerEngine">{car.engine} </div>

            </div>
        )
    }
}