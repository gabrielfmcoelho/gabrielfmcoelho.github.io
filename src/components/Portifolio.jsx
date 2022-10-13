import React from 'react'
import Monkeypox from '../assets/portifolio/Monkeypox.png'
import SindromeGripal from '../assets/portifolio/SindromeGripal.png'
import PainelEpidemiologico from '../assets/portifolio/PainelEpidemiologico.png'
import LeitosCOVID19 from '../assets/portifolio/LeitosCOVID19.png'

const Portifolio = () => {

    const portifolios = [
        {
            id: 1, 
            src: Monkeypox, 
            title: '<Painel> Mapa de Monkeypox', 
            description: 'Array Destructuring é uma forma de desestruturar um array em variáveis, de forma que cada elemento do array seja atribuído a uma variável. É uma forma de extrair dados de um array e atribuí-los a variáveis.', 
            link: ''
        },
        {
            id: 2, 
            src: SindromeGripal, 
            title: '<Painel> Sindrome Gripal', 
            description: 'Array Destructuring é uma forma de desestruturar um array em variáveis, de forma que cada elemento do array seja atribuído a uma variável. É uma forma de extrair dados de um array e atribuí-los a variáveis.', 
            link: ''
        },
        {
            id: 3, 
            src: PainelEpidemiologico, 
            title: '<Painel> Epidemiologico', 
            description: 'Array Destructuring é uma forma de desestruturar um array em variáveis, de forma que cada elemento do array seja atribuído a uma variável. É uma forma de extrair dados de um array e atribuí-los a variáveis.', 
            link: ''
        },
        {
            id: 4, 
            src: LeitosCOVID19, 
            title: '<Painel> Leitos de COVID19', 
            description: 'Array Destructuring é uma forma de desestruturar um array em variáveis, de forma que cada elemento do array seja atribuído a uma variável. É uma forma de extrair dados de um array e atribuí-los a variáveis.', 
            link: ''
        },
    ];

  return (
    <div className="h-fit bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p name='Portifolio' className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Portifólio Público
                </p>

                <p className="py-6">
                    Confira alguns dos meus projetos pessoais, acadêmicos e profissionais aqui mesmo
                </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portifolios.map((portifolio) => (

                    <div key={portifolio.id} className="shadow-md shadow-gray-600 rounded-lg">
                        
                        <img src={portifolio.src} alt='arrayDestruct' className="rounded-md duration-200 hover:scale-105"/>

                        <p className='m-5 flex items-center justify-center font-assinatura font-bold text-cyan-500'>
                            {portifolio.title}
                        </p>

                        <p className='flex items-center justify-center px-6 py-3'>
                            {portifolio.description}
                        </p>

                        <div className="flex items-center justify-center">
                            {/*<button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                GitHub
                </button>*/}
                            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                Ver Detalhes
                            </button>
                        </div>

                    </div>

                ))}
            </div>
        </div>
        <br/>
            <br/>
            <br/>
            <br/>
            <br/>
    </div>
  );
};

export default Portifolio