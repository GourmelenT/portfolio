import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { linkWeb } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import LinkProjects from './LinkProjects';


const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    link_web,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
            options={{
            max: 45,
            scale: 1,
            speed: 450,
            }}
            className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
            <div className='relative w-full h-[230px]'>
                <img
                    src={image}
                    alt='project_image'
                    className='w-full h-full object-cover rounded-2xl'
                />

                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                    <LinkProjects link_web={link_web} linkWeb={linkWeb} />
                    <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className='black-gradient ms-1 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                    <img
                        src={github}
                        alt='source code'
                        className='w-1/2 h-1/2 object-contain'
                    />
                    </div>
                </div>
                
            </div>

            <div className='mt-5'>
                <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                <p className='mt-2 text-secondary text-[14px]'>{description}</p>
            </div>

            <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
                <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
                >
                #{tag.name}
                </p>
            ))}
            </div>
        </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} `}>Mes différents travaux</p>
            <h2 className={`${styles.sectionHeadText}`}>Projets</h2>
        </motion.div>

        <div className='w-full flex'>
            <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
            Les projets suivants mettent en valeur mes compétences et mon expérience à 
            travers des exemples concrets de mes réalisations. Chaque projet est brièvement 
            décrit avec des liens vers des dépôts de code. Cela permet de vous montrer ma 
            capacité à travailler avec différentes technologies et à gérer mes projets de 
            manière efficace. 
            </motion.p>
        </div>

        <div className='mt-20 flex flex-wrap gap-7'>
            {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
        </div>
        </>
    );
};

export default SectionWrapper(Works, "project");