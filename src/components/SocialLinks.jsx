import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {IoLogoTableau} from 'react-icons/io5'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {id: 1,
        child: (
            <>LinkedIn <FaLinkedin size={30} /></>
            ),
        href: 'https://www.linkedin.com/in/gabriel--coelho/',
        style: 'rounded-tr-md',
        },
        {id: 2,
            child: (
                <>GitHub <FaGithub size={30} /></>
                ),
            href: 'https://github.com/SrGCoelho',
            style: 'rounded-tr-md',
        },
        {id: 3,
            child: (
                <>Tableau Public <IoLogoTableau size={30} /></>
                ),
            href: 'https://public.tableau.com/app/profile/gabriel.feitosa.melo.coelho',
            style: 'rounded-tr-md',
        },
        {id: 4,
            child: (
                <>Curriculo <BsFillPersonLinesFill size={30} /></>
                ),
            href: '/curriculo.pdf',
            style: 'rounded-tr-md',
            download: true,
        },
    ];

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map((link) => (
                <li key={link.id} className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                    <a href={link.href} 
                    className={'flex justify-between items-center w-full text-white' 
                    + " " 
                    + link.style} 
                    download={link.download} 
                    target='_blank' 
                    rel='noreferrer'>
                            {link.child}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default SocialLinks