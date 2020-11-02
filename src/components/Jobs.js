import React from "react";
import Footer from "./Footer";
import Job from "./Job";

const Jobs = () => {
  return (
    <>
      <div className="section">
        <Job
          className="green"
          title="Space Cow-Boy"
          contractType="CDI "
          country="Ganymède"
          city="Delmak-0"
        ></Job>
        <Job
          className="red"
          title="Fabricant de barres chocolatées"
          contractType="Stage de 6 mois "
          country="Mars"
          city="Capital City"
        ></Job>
        <Job
          className="blue"
          title="Druide"
          contractType="CDD"
          country="France"
          city="Quiberon"
        ></Job>
        <Job
          className="yellow"
          title="Pied de table"
          contractType="CDD"
          country="Ikea"
          city="Paris"
        ></Job>
        <Job
          className="green"
          title="Eleveur de taupes"
          contractType="CDD"
          country="Irlande"
          city="Pas loin de Dublin"
        ></Job>
        <Job
          className="yellow"
          title="Chauffeur de Bus Magique"
          contractType="Stage de 3ème"
          country="Dans la 4eme dimension"
          city="MagicTower City"
        ></Job>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Jobs;
