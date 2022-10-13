import React from 'react'
import Heroimage from '../assets/images/Eu6.png'
import {IoIosArrowForward} from 'react-icons/io'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='Inicio' className='h-fit  bg-gradient-to-b from-black via-black to-gray-800'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            
            <div className='flex flex-col justify-center h-full'>
                
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>


                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    Cientista de Dados & Desenvolvedor de Soluções
                </h2>
                
                <p className='text-gray-500 py-4 max-w-md'>
                    Sou apaixonado por tecnologia & por resolver problemas.
                </p>
                
                <div>
                    <Link to='Portifolio' smooth duration={500} offset={200} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Conheça meu portifolio público  &nbsp;
                        <span className='group-hover:rotate-90 duration-300'>
                            <IoIosArrowForward size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            
            </div>
            
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <img src={Heroimage} alt='Minha Foto' className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    </div>
  );
};

export default Home