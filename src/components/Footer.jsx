import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import CreditsPage from "./CreditsPage";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Restons connecté</h2>
            <p>Rejoignez-moi sur les réseaux sociaux pour voir l'évolution de mon profil.</p>
          </div>
          <div className="flex justify-center md:justify-start">
            <a href="https://www.linkedin.com/in/tom-gourmelen/" className="text-white mx-4 hover:text-gray-400">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://github.com/GourmelenT" className="text-white mx-4 hover:text-gray-400">
              <FaGithub className="text-2xl" />
            </a>
            <a href="#" className="text-white mx-4 hover:text-gray-400">
              <FaInstagram className="text-2xl" />
            </a>
          </div>
        </div>
        <hr className="my-4 border-gray-700" />
        <CreditsPage />
        <hr className="my-4 border-gray-700" />
        <div className="text-center text-white">
            <p>&copy; {new Date().getFullYear()} Tom Gourmelen. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
