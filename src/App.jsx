import React, { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";
import { song } from "./assets";

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Afficher une alerte lors du chargement de la page
    window.alert(
      "Ce site web utilise un framework qui a récemment été mis à jour. Il est possible que le site ne soit pas accessible avec votre version actuelle de navigateur."
    );

    // Démarrer la lecture de l'audio lorsque le composant est monté
    audioRef.current.play();

    // Gérer la lecture continue de l'audio
    audioRef.current.addEventListener("ended", () => {
      audioRef.current.play();
    });

    // Nettoyer les écouteurs d'événements lorsque le composant est démonté
    return () => {
      audioRef.current.removeEventListener("ended", () => {
        audioRef.current.play();
      });
    };
  }, []); // Utilisation d'un tableau vide comme dépendance pour s'assurer que l'alerte ne s'affiche qu'une seule fois

  return (
    <BrowserRouter>
      <audio ref={audioRef} src={song} loop></audio>
      <div className='relative z-0 bg-space'>
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
