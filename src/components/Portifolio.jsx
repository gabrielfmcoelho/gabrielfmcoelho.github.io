import React from 'react'
import Monkeypox from '../assets/portifolio/Monkeypox.png'
import PredicaoDoencaCardiaca from '../assets/portifolio/PredicaoDoencaCardiaca.png'
import Website from '../assets/portifolio/Website.png'
import LeitosCOVID19 from '../assets/portifolio/LeitosCOVID19.png'

const Portifolio = () => {

    const portifolios = [
        {
            id: 1, 
            src: Monkeypox, 
            title: '<Painel> Monkeypox SESAPI', 
            description: 'Painel demonstrativo construido em Tableau para exploração de diferentes tipos de gráficos e parâmetros para visualização de casos *hipotéticos* de Monkeypox (também conhecida como varíola do macaco) no Piauí. Este painel foi preparado para a Secretaria de Estado da Saúde do Piauí (SESAPI)', 
            href: 'https://public.tableau.com/app/profile/gabriel.feitosa.melo.coelho/viz/SituaoEpidemiologicadeMonkeypoxPiau/Dashboard'
        },
        {
            id: 2, 
            src: PredicaoDoencaCardiaca, 
            title: '<WebApp+ML> Predição de Doença Cardiaca', 
            description: 'Web App criado em flask para realizar a aquisição de dados de pacientes e realizar a predição de doença cardíaca. O modelo de Machine Learning utilizado foi o Random Forest Classifier em conjunto com uma scikit learn pipeline, com uma acurácia de 85%. O modelo foi treinado com dados do Kaggle', 
            href: 'http://gabrielfmcoelho.pythonanywhere.com/'
        },
        {
            id: 3,
            src: Website,
            title: '<Website> Portifólio Pessoal',
            description: 'Este website foi criado com o intuito de demonstrar meus conhecimentos em React e Tailwind. O website foi criado com intuito de servir como hub de portifólios e projetos pessoais',
            href: 'https://gabrielfmcoelho.github.io/'
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
                                <a href={portifolio.href} target="_blank" rel="noreferrer">Ver Detalhes</a>
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