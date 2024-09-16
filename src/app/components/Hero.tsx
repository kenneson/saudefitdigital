'use client';

import Slider from "react-slick";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const ebooks = [
        {
            title: 'Detox 7 dias emagreça até 3kg',
            description: 'Receitas nutritivas para manter uma dieta equilibrada e saborosa!',
            image: '/capa e-book detox.png',
            alt: 'Capa do E-book 2',
            cta: 'Baixe o Guia Fitness!',
            link: 'https://pay.kiwify.com.br/UmE9h0i', // link para o primeiro e-book

        },
        {
            title: 'O Guia das Marmitas Perfeitas',
            description: 'Prepare marmitas saudáveis e deliciosas de forma prática e rápida!',
            image: '/capa kiwify ebook marmitas.png',
            alt: 'Capa do E-book 1',
            cta: 'Adquira Agora !',
            link: 'https://pay.kiwify.com.br/ZVqHZUs', // link para o segundo e-book
        },
        {
            title: 'Chás para Emagrecer',
            description: 'Dicas incríveis para criar marmitas vegetarianas deliciosas!',
            image: '/capa mockup 02.png',
            alt: 'Capa do E-book 3',
            cta: 'Garanta o Seu!',
            link: 'https://pay.kiwify.com.br/UTHotB8', // link para o terceiro e-book
        },
    ];


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            }
        ]
    };

    return (
        <header className="hero bg-gradient-to-br from-[#004527] to-[#006c3b] py-8 md:py-12 px-4 md:px-8 rounded-lg shadow-lg">
            <Slider {...settings}>
                {ebooks.map((ebook, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between max-w-6xl">
                            {/* Texto à esquerda */}
                            <div className="text-center md:text-left text-white w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{ebook.title}</h1>
                                <p className="text-base md:text-lg lg:text-xl mb-8">{ebook.description}</p>
                                <a href={ebook.link} target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-[#fb8034] hover:bg-[#FF934F]/90 text-white font-bold px-6 py-3">
                                        {ebook.cta}
                                    </Button>
                                </a>
                            </div>

                            {/* Imagem à direita */}
                            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                <Image
                                    src={ebook.image}
                                    alt={ebook.alt}
                                    width={500}
                                    height={600}
                                    className="rounded-lg max-w-full h-auto object-contain md:object-cover"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </header>
    );
}

export default Hero;