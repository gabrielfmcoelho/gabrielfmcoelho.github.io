import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

const NavBar = () => {

    const [click, setClick] = React.useState(false);

    const urls = [
        {id: 1, url: 'Inicio', text: 'Inicio', offset: -200},
        {id: 2, url: 'Sobre Mim', text: 'Sobre Mim', offset: -200},
        {id: 4, url: 'Portifolio', text: 'Portifolio', offset: -150},
        {id: 3, url: 'Experiencia', text: 'Experiência', offset: -150},
        {id: 6, url: 'Contato', text: 'Contato', offset: -150},
    ];

  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        
        <div>
            <h1 className='text-2xl font-assinatura ml-2'>&#60;Dev/&#62; Gabriel Coelho.</h1>
        </div>

        <ul className='hidden md:flex'>
            {urls.map((url) => (
                <li key={url.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link to={url.url} smooth duration={500} offset={url.offset}>
                        {url.text}
                    </Link>
                </li>
            ))}
        </ul>

        <div onClick={()=>setClick(!click)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        
        {click && (
        <ul className='flex flex-col justify-center items-center absolute w-full top-0 right-0 h-screen bg-gradient-to-b from-black to-gray-700 text-gray-500'>
            {urls.map((url) => (
                <li key={url.id} className='px-4 cursor-pointer capitalize py-6 text-2xl'>
                    <Link onClick={()=>setClick(!click)} to={url.url} smooth duration={500} offset={200}>
                        {url.text}
                    </Link>
                </li>
            ))}
        </ul>
        )}

    </div>
  );
};

export default NavBar