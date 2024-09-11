import Image from 'next/image';

const About = () => {
    return (
        <section className="about bg-gray-100 py-16 px-8">
            <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
                {/* Texto sobre o autor */}
                <div className="text-left lg:w-1/2">
                    <h2 className="text-4xl font-bold text-[#004527]">Sobre mim</h2>
                    <p className="mt-6 text-lg text-gray-700 text-justify">
                    What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    </p>
                </div>

                {/* Imagem do autor */}
                <div className="lg:w-1/2 flex justify-center">
                    <Image 
                        src="/autor.jpg" 
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
