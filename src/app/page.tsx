'use client';  // Directive pour signaler que c'est un composant côté client

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Réinitialiser les états de succès et d'erreur
        setIsSuccess(false);
        setIsError(false);

        // Envoi du formulaire via fetch
        try {
            const response = await fetch('https://formspree.io/f/meoezber', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Si l'envoi est un succès
                setIsSuccess(true);
            } else {
                // En cas d'erreur d'envoi
                setIsError(true);
            }
        } catch (error) {
            // En cas d'erreur réseau
            setIsError(true);
        }
    };

    return (
        <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-mono bg-black text-white">
            {/* Head Section */}
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap"
                />
                {/* Importation d'Animate.css */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
            </Head>

            {/* Header Section */}
            <header className="text-center sm:text-left animate__animated animate__fadeIn animate__delay-1s">
                <h1 className="text-5xl font-extrabold mb-4">
                    Bonjour, je suis <span className="text-yellow-500">Syphax</span>
                </h1>
                <p className="text-xl mb-8">Étudiant en Bac Informatique, passionné par le développement et l'intelligence artificielle.</p>
                <div className="flex justify-center sm:justify-start gap-6">
                    <a
                        className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition duration-300 animate__animated animate__bounceIn animate__delay-2s"
                        href="#projets"
                    >
                        Voir mes projets
                    </a>
                    <a
                        className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition duration-300 animate__animated animate__bounceIn animate__delay-2s"
                        href="#contact"
                    >
                        Me contacter
                    </a>
                </div>
            </header>

            {/* Projets Section */}
            <section id="projets" className="w-full bg-gray-800 text-white p-16 rounded-lg shadow-md animate__animated animate__fadeIn animate__delay-2s">
                <h2 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn animate__delay-3s">Mes Projets</h2>
                <p className="text-center text-lg mb-12 animate__animated animate__fadeIn animate__delay-3s">Voici quelques projets personnels sur lesquels j'ai travaillé. Clique pour en savoir plus !</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Projet Flutter Quiz App */}
                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeIn animate__delay-4s">
                        <h3 className="text-2xl font-semibold mb-4">Flutter Quiz App</h3>
                        <p className="text-sm mb-4">Une application mobile Flutter pour créer des quiz interactifs. Utilisation de Firebase pour la gestion des données.</p>
                        <div className="flex gap-4 mb-4">
                            <Image src="/flutter.svg" alt="Flutter logo" width={48} height={48} />
                            <Image src="/dart.svg" alt="Dart logo" width={48} height={48} />
                            <Image src="/firebase.png" alt="Firebase logo" width={48} height={48} />
                        </div>
                        <a href="https://github.com/syphaxlch/Flutter_quiz_app" className="text-blue-500 hover:underline">Voir le projet</a>
                    </div>

                    {/* Projet PHP Ecommerce */}
                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeIn animate__delay-5s">
                        <h3 className="text-2xl font-semibold mb-4">PHP Ecommerce</h3>
                        <p className="text-sm mb-4">Un site de e-commerce développé en PHP, avec gestion des utilisateurs, des produits, des commandes, et du paiement en ligne. Ce projet met en œuvre une architecture simple mais efficace pour un site d'achat en ligne.</p>
                        <div className="flex gap-4 mb-4">
                            <Image src="/php.svg" alt="PHP logo" width={48} height={48} />
                            <Image src="/apache.svg" alt="Apache logo" width={48} height={48} />
                        </div>
                        <a href="https://github.com/syphaxlch/PHP-ecommerce" className="text-blue-500 hover:underline">Voir le projet</a>
                    </div>

                    {/* Projet Extension Chrome pour Filtrage d'E-mails */}
                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeIn animate__delay-6s">
                        <h3 className="text-2xl font-semibold mb-4">Extension Chrome pour le Filtrage d'E-mails</h3>
                        <p className="text-sm mb-4">Développement d'une extension Chrome pour le filtrage intelligent des e-mails dans Gmail. L'extension classe les messages par catégories et fournit des justifications détaillées pour chaque classification grâce à un modèle de langage LangChain et Flask.</p>
                        <div className="flex gap-4 mb-4">
                            <Image src="/flask.svg" alt="Flask logo" width={48} height={48} />
                            <Image src="/llama3.png" alt="LLAMA 3 logo" width={48} height={48} />
                            <Image src="/langchain.png" alt="LangChain logo" width={48} height={48} />
                        </div>
                        <a href="https://github.com/syphaxlch/Email_Analysis_with_LLM" className="text-blue-500 hover:underline">Voir le projet</a>
                    </div>

                    {/* Projet Azure CI/CD : Création d’un VM Scale Set */}
                    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 animate__animated animate__fadeIn animate__delay-7s">
                        <h3 className="text-2xl font-semibold mb-4">Création d’un VM Scale Set avec Azure DevOps</h3>
                        <p className="text-sm mb-4">
                            Automatisation du déploiement d’un **VM Scale Set** sur Azure avec **Azure DevOps**. Le projet inclut :
                        </p>
                        <div className="flex gap-4 mb-4">
                            <Image src="/azure.png" alt="Azure logo" width={48} height={48} />
                            <Image src="/devops.svg" alt="Azure DevOps logo" width={48} height={48} />
                        </div>
                        <a href="https://github.com/syphaxlch/8CLD201_Devoir1" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Voir le projet sur GitHub</a>
                    </div>
                </div>
            </section>

            {/* Formulaire de Contact */}
            <section id="contact" className="w-full bg-gray-800 text-white p-16 rounded-lg shadow-md animate__animated animate__fadeIn animate__delay-2s">
                <h2 className="text-4xl font-bold text-center mb-8 animate__animated animate__fadeIn animate__delay-3s">Me contacter</h2>
                <p className="text-center text-lg mb-12 animate__animated animate__fadeIn animate__delay-3s">Envoyez-moi un message, je serai heureux de répondre à vos questions.</p>

                {/* Formulaire de contact Formspree */}
                <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-semibold">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-gray-700 text-white p-3 rounded-lg"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-semibold">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-gray-700 text-white p-3 rounded-lg"
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm font-semibold">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-gray-700 text-white p-3 rounded-lg"
                            rows="5"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-400 transition duration-300"
                    >
                        Envoyer
                    </button>

                    {isSuccess && (
                        <div className="text-green-500 text-center mt-4 animate__animated animate__fadeIn">
                            Message envoyé avec succès !
                        </div>
                    )}
                    {isError && (
                        <div className="text-red-500 text-center mt-4 animate__animated animate__fadeIn">
                            Une erreur est survenue. Veuillez réessayer.
                        </div>
                    )}
                </form>
            </section>
        </div>
    );
}
