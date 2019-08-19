import React from "react";

const StandardOffer = () => {
  return (
    <div className="standardOffer">
      <div className="offerButton ">
        <button className="testDrive__btn btn__price">
          Pobierz Cennix UX <span className="testDrive__icon btn__span" />
        </button>
        <button className="testDrive__btn btn__price">
          Pobierz Cennix NX <span className="testDrive__icon btn__span" />
        </button>
        <button className="testDrive__btn btn__price">
          Pobierz Cennix RX <span className="testDrive__icon btn__span" />
        </button>
      </div>
      <div className="offerPhoto">
        <div className="carBackground carBackground__RX">
          <div className="carText">
            <div className="carName">RX 300 Optimum</div>
            <div className="carPrice">juz od 1990 zl netto miesiecznie</div>
          </div>
          <div className="btn btn__plus">+</div>
        </div>
        <div className="carBackground carBackground__UX">
          <div className="carText">
            <div className="carName">UX 200 Optimum</div>
            <div className="carPrice">juz od 990 zl netto miesiecznie</div>
          </div>
          <div className="btn btn__plus">+</div>
        </div>
        <div className="carBackground carBackground__NX">
          <div className="carText">
            <div className="carName">NX 300 Optimum</div>
            <div className="carPrice">juz od 1390 zl netto miesiecznie</div>
          </div>
          <div className="btn btn__plus">+</div>
        </div>
      </div>
    </div>
  );
};

export default StandardOffer;
