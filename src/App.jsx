import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  useEffect(() => {
    // Afficher une alerte lors du chargement de la page
    window.alert(
      "Ce site web utilise un framework qui a récemment été mis à jour. Il est possible que le site ne soit pas accessible avec votre version actuelle de navigateur."
    );
  }, []); // Utilisation d'un tableau vide comme dépendance pour s'assurer que l'alerte ne s'affiche qu'une seule fois

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
