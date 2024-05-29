import React, { useState, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services, informations } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='rounded-[20px] mb-5 w-30 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mobileQuery.matches);

    const handleMobileQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mobileQuery.addEventListener("change", handleMobileQueryChange);

    return () => {
      mobileQuery.removeEventListener("change", handleMobileQueryChange);
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index) => {
    if (isMobile) {
      setClickedIndex(clickedIndex === index ? null : index);
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Doté d'une solide expérience en PHP, JavaScript, ReactJS, Node.js et Symfony, 
        je suis un développeur logiciel polyvalent et hautement adaptable, capable de créer 
        des solutions sur mesure avec différents langages, même pour des projets de petite envergure. 
        Animé par une curiosité insatiable et une détermination à toute épreuve, je suis constamment à 
        l'affût de nouvelles connaissances et de défis stimulants. Au-delà de ma passion pour le 
        développement, je cultive également d'autres centres d'intérêt enrichissants qui nourrissent 
        ma créativité et apportent une perspective unique à chaque projet.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            icon={service.icon}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          />
        ))}

      </div>
      
      {isMobile && clickedIndex !== null && (
        <motion.div
          className="w-full bg-tertiary rounded-[20px] mt-10 min-h-[280px] flex flex-col items-center"
        >
          <div className="w-full flex justify-center items-center">
            {informations[clickedIndex].type === 'video' ? (
              <video autoPlay loop muted controls className="p-10 rounded-[50px]">
                <source src={informations[clickedIndex].image} type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={informations[clickedIndex].image} alt="Info" className="p-10 rounded-[50px]" />
            )}
          </div>

          <div className="w-full flex flex-col justify-center px-8 mt-4">
            <p className="text-white text-[20px] font-bold text-center">{informations[clickedIndex].text}</p>
          </div>
        </motion.div>
      )}

      {!isMobile && hoveredIndex !== null && (
        <motion.div
          className="w-full bg-tertiary rounded-[20px] mt-10 min-h-[280px] flex items-center"
        >
          {informations[hoveredIndex].type === 'video' ? (
            <video autoPlay loop muted controls className="w-1/4 rounded-l-[20px]">
              <source src={informations[hoveredIndex].image} type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={informations[hoveredIndex].image} alt="Info" className="w-1/4 rounded-l-[20px]" />
          )}

          <div className="w-3/4 flex flex-col justify-center px-8">
            <p className="text-white text-[20px]">{informations[hoveredIndex].text}</p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(About, "about");
