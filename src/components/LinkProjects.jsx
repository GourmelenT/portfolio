import React from 'react';

const LinkProjects = ({ link_web, linkWeb }) => {
  if (link_web) {
    return (
        <div
            onClick={() => window.open(link_web, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
        >
            <img
            src={linkWeb}
            alt='source code'
            className='w-1/2 h-1/2 object-contain'
            />
        </div>
    );
  }

  return null;
};

export default LinkProjects;
