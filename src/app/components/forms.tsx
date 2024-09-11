'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const EbookForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simula uma ação de redirecionamento
        window.location.href = 'https://pay.kiwify.com.br/UTHotB8'; 
    };

    return (
        <section className="relative bg-cover bg-repeat py-16 px-8 text-white" style={{ backgroundImage: "url('/bg.jpg')" }}>
            {/* Camada verde transparente */}
            <div className="absolute inset-0 bg-[#004527] bg-opacity-95"></div>

            <div className="container mx-auto max-w-xl text-center relative z-10">
                <h2 className="text-4xl font-bold mb-8">Quer Garantir seu E-book?</h2>
                <p className="text-lg mb-8">Insira seu nome e e-mail abaixo para receber mais informações e adquirir o seu e-book agora mesmo!</p>
                
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg text-left relative z-10">
                    <div className="mb-6">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#5EA228]"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#5EA228]"
                            required
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-[#FF934F] hover:bg-[#FF934F]/90 text-white font-bold py-3 rounded-lg transition-all duration-300">
                        Quero Meu E-book Agora!
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default EbookForm;
