import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white bg-[#F5F5F5] dark:bg-[#121212] font-lato">
            {/* Header - Transparent with Logo exactly like Landing Page */}
            <header className="w-full py-6 px-8 absolute top-0 left-0 z-50 flex justify-center lg:justify-start">
                <img
                    src="https://idxboost-single-property.s3.amazonaws.com/ad6f19fee807c6048e328d33bf4cd2e5/58726008becf56de4a8cfb855869cbac.png"
                    alt="Brickell Realty Group"
                    className="h-12 w-auto filter-none md:h-14 object-contain"
                />
            </header>

            <main className="flex-grow flex items-center justify-center relative w-full min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')"
                }}
            >
                <div className="absolute inset-4 md:inset-8 border border-white/20 pointer-events-none z-10 hidden md:block"></div>
                <div className="relative z-20 max-w-3xl w-full mx-4 px-6 py-16 md:p-16 bg-white/10 dark:bg-black/60 backdrop-blur-md rounded-lg border border-white/10 shadow-2xl text-center animate-fade-in-up">
                    <div className="mb-8 flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-[#A5823F]/20 flex items-center justify-center border border-[#A5823F]/50">
                            <span className="material-symbols-outlined text-5xl text-[#A5823F]">check_circle</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 tracking-wide drop-shadow-lg">
                        ¡Gracias por tu solicitud!
                    </h1>

                    <div className="h-px w-24 bg-[#A5823F] mx-auto mb-8"></div>

                    <div className="space-y-6 text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                        <p>
                            Hemos recibido tu información exitosamente. En <span className="text-[#A5823F] font-semibold">Brickell Realty Group</span>, valoramos la excelencia y el talento único.
                        </p>
                        <p>
                            Nuestro equipo de reclutamiento revisará tu perfil detalladamente. Nos pondremos en contacto contigo en breve para agendar una cita personal si tu perfil se alinea con nuestra visión exclusiva.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-col items-center space-y-4">
                        <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Mientras esperas</p>
                        <div className="flex gap-4">
                            {/* Facebook */}
                            <a href="https://www.facebook.com/p/Brickell-Realty-Group-100063637617298/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#A5823F] hover:border-[#A5823F] transition-all duration-300 group">
                                <svg aria-hidden="true" className="w-4 h-4 fill-current group-hover:text-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                            </a>

                            {/* Instagram */}
                            <a href="https://www.instagram.com/brickell.realty.group/" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#A5823F] hover:border-[#A5823F] transition-all duration-300 group" target="_blank" rel="noopener noreferrer">
                                <svg aria-hidden="true" className="w-4 h-4 fill-current group-hover:text-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                            </a>

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/company/brickell-realty-group/" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-[#A5823F] hover:border-[#A5823F] transition-all duration-300 group" target="_blank" rel="noopener noreferrer">
                                <svg aria-hidden="true" className="w-4 h-4 fill-current group-hover:text-white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                            </a>
                        </div>
                        <p className="text-xs text-gray-500 mt-6">Síguenos en nuestras redes sociales para las últimas actualizaciones.</p>
                    </div>

                    <Link
                        to="/"
                        className="inline-block mt-8 text-white/50 hover:text-white text-xs tracking-widest uppercase transition-colors border-b border-transparent hover:border-white/50 pb-1 cursor-pointer bg-transparent"
                    >
                        Volver al inicio
                    </Link>
                </div>
            </main>

            <footer className="absolute bottom-0 w-full py-4 text-center z-20 pointer-events-none">
                <p className="text-white/40 text-xs font-light tracking-wide">
                    © {new Date().getFullYear()} Brickell Realty Group. Exclusive. Luxurious. Unique.
                </p>
            </footer>
        </div>
    );
};

export default ThankYou;