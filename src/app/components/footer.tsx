'use client'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-12 text-white">
            <div className="container mx-auto px-4">
                {/* Redes Sociais */}
                <div className="flex flex-col items-center space-y-4">
                    <h2 className="text-2xl font-bold">Siga-nos nas redes sociais</h2>
                    <div className="flex space-x-6">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5EA228] transition-all duration-300">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5EA228] transition-all duration-300">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#5EA228] transition-all duration-300">
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>

                {/* Contato */}
                <div className="mt-8 text-center">
                    <p className="text-gray-400">Contato: <a href="mailto:exemplo@email.com" className="text-white hover:text-[#FF934F] transition-all duration-300">leilaneaguiarnutri@gmail.com</a></p>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Saude Fit Digital. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
