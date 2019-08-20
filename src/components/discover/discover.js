import React from "react";
import $ from "jquery";

const MainDiscover = () => {
  $(document).ready(function() {
    $(".discoverItem__tag").mouseover(function() {
      let tagId = $(this).attr("id");
      switch (tagId) {
        case "news":
          $(".discover__background").css(
            "background-image",
            "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(img/discover/news.png)"
          );
          break;
        case "hybrid":
          $(".discover__background").css(
            "background-image",
            "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(img/discover/hybrid.jpg)"
          );
          break;
        case "performance":
          $(".discover__background").css(
            "background-image",
            "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(img/discover/performance.jpg)"
          );
          break;
        case "design":
          $(".discover__background").css(
            "background-image",
            "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(img/discover/design.jpg)"
          );
          break;
        case "technic":
          $(".discover__background").css(
            "background-image",
            "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(img/discover/technics.jpg)"
          );
          break;
        case "quality":
          $(".discover__background").css(
            "background-image",
            "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(img/discover/quality.jpg)"
          );
          break;
        case "concept":
          $(".discover__background").css(
            "background-image",
            "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(img/discover/concept.jpg)"
          );
          break;
      }
    });
  });

  return (
    <div className="discover__background">
      <ul className="discoverList">
        <li className="discoverItem">
          <h4 className="discoverItem__tag" id="news">
            Aktualnosci lexusa
          </h4>
          <p className="discoverItem__description">
            Zobacz co sie dzieje w swiecie Lexusa
          </p>
        </li>
        <li className="discoverItem">
          <h4 className="discoverItem__tag" id="hybrid">
            Stop smog go hybrid
          </h4>
          <p className="discoverItem__description">
            Rozwijamy naped hybrydowy od 2004 roku
          </p>
        </li>
        <li className="discoverItem">
          <h4 className="discoverItem__tag" id="performance">
            Osiagi
          </h4>
          <p className="discoverItem__description">
            Auta stworzone dla czystej przyjemnosci prowadzenia
          </p>
        </li>
        <li className="discoverItem">
          <h4 className="discoverItem__tag" id="design">
            Wzornictwo
          </h4>
          <p className="discoverItem__description">
            Ewolucja luxsusu i stylu Lexusa
          </p>
        </li>
        <li className="discoverItem">
          <h4 className="discoverItem__tag" id="technic">
            Technika
          </h4>
          <p className="discoverItem__description">
            Niezawodne dziedzictwo innowacji
          </p>
        </li>
        <li className="discoverItem">
          <h4 className="discoverItem__tag" id="quality">
            Jakosc wzornictwa
          </h4>
          <p className="discoverItem__description">
            Zapraszamy na spotkanie ze sztuka Takumi
          </p>
        </li>
        <li className="discoverItem">
          <h4 className="discoverItem__tag" id="concept">
            Samochody koncepcyjne
          </h4>
          <p className="discoverItem__description">
            Poznaj przyszle modele Lexusa
          </p>
        </li>
      </ul>
    </div>
  );
};

export default MainDiscover;
