import React from 'react';
import { Clock, Apple, Book } from 'lucide-react';

type BenefitCardProps = {
    icon: React.ElementType; // Tipo para o ícone
    title: string;
    description: string;    
};

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="flex-shrink-0 mr-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#5EA228] text-white">
                <Icon size={24} />
            </div>
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-1 text-[#004527]">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
        </div>
    </div>
);

const Benefits = () => {
    const benefits = [
        {
            icon: Clock,
            title: "Economia de Tempo",
            description: "Receitas rápidas e práticas para sua rotina."
        },
        {
            icon: Apple,
            title: "Alimentação Saudável",
            description: "Pratos nutritivos e balanceados."
        },
        {
            icon: Book,
            title: "Fácil de Seguir",
            description: "Instruções passo a passo para iniciantes."
        }
    ];

    return (
        <section className="benefits py-16 bg-gradient-to-r from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-[#5EA228] mb-8">
                    O que você encontrará em nossos materiais ?
                </h2>
                <div className="flex flex-col md:flex-row justify-between items-stretch gap-4">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex-1">
                            <BenefitCard {...benefit} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;