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
          country="U.S.A"
          city="Far-West"
        ></Job>
        <Job
          className="red"
          title="Gouteur de barres chocolatées"
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
          contractType="CDD de 2 jours"
          country="Ikea"
          city="Paris"
        ></Job>
        <Job
          className="green"
          title="Eleveur de taupes pour la C.I.A"
          contractType=""
          country="Informations confidentielles"
          city="***"
        ></Job>
        <Job
          className="yellow"
          title="Chauffeur de Bus Magique"
          contractType="Stage découverte de 3ème"
          country="Dans une autre dimension"
          city="Unknown"
        ></Job>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Jobs;
