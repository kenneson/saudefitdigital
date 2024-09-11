import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialCard = ({ image, alt }) => (
    <Card className="w-[300px] h-[400px] overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
        <CardContent className="p-0">
            <div className="relative w-full h-[400px]"> {/* Certifique-se que a altura está definida */}
                <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
        </CardContent>
    </Card>
);

const Testimonials = () => {
    const testimonials = [
        {
            image: '/depoimento1.jpg',
            alt: 'Depoimento de Maria',
        },
        {
            image: '/depoimento2.jpg',
            alt: 'Depoimento de João',
        },
        {
            image: '/depoimento3.jpg',
            alt: 'Depoimento de Ana',
        },
    ];

    return (
        <section className="testimonials bg-gradient-to-b from-green-900 to-green-800 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-12">
                    Veja o que dizem sobre nosso material
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
