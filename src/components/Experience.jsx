import React from 'react'
import python from '../assets/images/python.png'
import scikitlearn from '../assets/images/scikitlearn.png'
import tableau from '../assets/images/tableau.png'
import matlab from '../assets/images/matlab.png'
import django from '../assets/images/django.png'
import javascript from '../assets/images/javascript.png'
import github from '../assets/images/github.png'
import terraform from '../assets/images/terraform.png'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import reactImage from '../assets/images/react.png'
import tailwind from '../assets/images/tailwind.png'

const Experience = () => {

    const tecnologias = [
        {
            id: 1,
            src: python,
            title: 'Python',
            style: 'shadow-yellow-400',
        },
        {
            id: 2,
            src: scikitlearn,
            title: 'Scikit-Learn',
            style: 'shadow-orange-400',
        },
        {
            id: 3,
            src: tableau,
            title: 'Tableau',
            style: 'shadow-blue-300',
        },
        {
            id: 4,
            src: matlab,
            title: 'Matlab',
            style: 'shadow-red-500',
        },
        {
            id: 5,
            src: django,
            title: 'Django',
            style: 'shadow-green-500',
        },
        {
            id: 6,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400',
        },
        {
            id: 7,
            src: terraform,
            title: 'Terraform',
            style: 'shadow-purple-500',
        },
        {
            id: 8,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {   
            id: 9,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 10,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500',
        },
        {
            id: 11,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-600',
        },
        {
            id: 12,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400',
        },
    ];
    
  return (
    <div name='Experiencia' className="bg-gradient-to-b from-gray-800 to-black w-full h-fit">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                    Experiencia
                </p>
                <p className="py-6">
                    Essas são as tecnologias com as quais ja trabalhei ou estou trabalhando atualmente
                </p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {tecnologias.map((tecnologia) => (
                    <div key={tecnologia.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tecnologia.style}`}>
                        <img src={tecnologia.src} alt={tecnologia.title} className="w-20 mx-auto"/>
                        <p className="mt-4">
                            {tecnologia.title}
                        </p>
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

export default Experience