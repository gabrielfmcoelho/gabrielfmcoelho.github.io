import React from 'react'

const About = () => {
  return (
    <div name='Sobre Mim' className='w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">

                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Um Pouco Sobre Mim
                </p>

            </div>

            <p className="text-xl mt-20">
                Sou um jovem de 22 anos, apaixonado por tecnologia e por resolver problemas.
            </p>

            <br/>

            <p className="text-xl">
                Atualmente estou cursando Engenharia Eletrica na Universidade Federal do Piaui (UFPI), e estou no 7º período.
            </p>
            
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    </div>
  );
};

export default About