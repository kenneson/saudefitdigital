import Image from 'next/image';

const About = () => {
    return (
        <section className="about bg-gray-100 py-16 px-8">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Texto sobre o autor */}
                <div className="text-left lg:w-1/2">
                    <h2 className="text-4xl font-bold text-[#5EA228]">Sobre mim</h2>
                    <p className="mt-6 text-lg text-gray-700 text-justify">
                    Sou Leilane Aguiar, nutricionista formada em 2016 pela Faculdade FAMETRO e pós-graduada em Nutrição Clínica e Esportiva pela UCAM em 2018, dedica sua carreira a auxiliar mulheres na conquista de seus objetivos de saúde e bem-estar por meio de uma abordagem personalizada e científica.

Com especialização em emagrecimento, menopausa, endometriose e Síndrome dos Ovários Policísticos (SOP), meu trabalho é centrado em oferecer suporte nutricional que promove uma vida mais equilibrada e saudável. Meu atendimento é atencioso e individualizado, com o objetivo de compreender suas necessidades e desafios únicos para desenvolver um plano alimentar que não apenas atenda suas metas de saúde, mas também se ajuste ao seu estilo de vida.

Neste espaço, você encontrará materiais desenvolvidos por mim para ajudá-la a transformar sua saúde e alcançar seus objetivos de emagrecimento. Seja bem-vinda!
                    </p>
                </div>

                {/* Imagem do autor */}
                <div className="lg:w-1/2 flex justify-center">
                    <Image 
                        src="/autor.png" 
                        alt="Foto do autor" 
                        width={400} 
                        height={400} 
                        className="rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
