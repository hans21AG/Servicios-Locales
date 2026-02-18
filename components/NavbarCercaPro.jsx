'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavbarCercaPro() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    const categorias = [
        { nombre: 'Fontanero', slug: '/fontanero' },
        { nombre: 'Electricista', slug: '/electricista' },
        { nombre: 'Cerrajero', slug: '/cerrajero' },
        { nombre: 'Manitas', slug: '/manitas' }
    ];

    return (
        <>
            {/* Navbar Principal */}
            <nav className="sticky top-0 z-50 bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14">

                        {/* Logo + Texto */}
                        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                            <Image
                                src="/cercapro-icon.png"
                                alt="CercaPro"
                                width={36}
                                height={36}
                                className="rounded-lg"
                            />
                            <span className="text-2xl font-bold">
                                <span className="text-[#1E3A8A]">Cerca</span>
                                <span className="text-[#F97316]">Pro</span>
                            </span>
                        </Link>

                        {/* Links Desktop - Hidden en móvil */}
                        <div className="hidden md:flex items-center gap-6">
                            {categorias.map((cat) => (
                                <Link
                                    key={cat.slug}
                                    href={cat.slug}
                                    className="text-[#4B5563] hover:text-[#F97316] hover:underline transition-colors font-medium"
                                >
                                    {cat.nombre}
                                </Link>
                            ))}
                        </div>

                        {/* Hamburger Button - Solo móvil */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            aria-label="Abrir menú"
                        >
                            <svg
                                className="w-6 h-6 text-[#F97316]"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Overlay oscuro - Solo visible cuando sidebar está abierto */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={closeMenu}
                />
            )}

            {/* Sidebar Mobile */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header del Sidebar con botón cerrar */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <span className="text-xl font-bold text-[#1E3A8A]">Menú</span>
                    <button
                        onClick={closeMenu}
                        className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Cerrar menú"
                    >
                        <svg
                            className="w-6 h-6 text-[#4B5563]"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                {/* Links del Sidebar */}
                <nav className="flex flex-col p-4 gap-4">
                    {categorias.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={cat.slug}
                            onClick={closeMenu}
                            className="text-lg text-[#4B5563] hover:text-[#F97316] hover:bg-gray-50 px-4 py-3 rounded-lg transition-all font-medium"
                        >
                            {cat.nombre}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    );
}
