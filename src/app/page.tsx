'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import '../../styles/globals.css';

export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [activeSection, setActiveSection] = useState<'projects' | 'education'>('projects'); // Pour alterner entre les sections
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoSrc, setVideoSrc] = useState('');
    const [language, setLanguage] = useState('fr'); // Langue active (par défaut anglais)
    const [translations, setTranslations] = useState<any>(null); // Traductions chargées

    // Fonction pour charger le fichier de traduction
    const loadTranslations = async (lang: string) => {
        const response = await fetch(`/locales/${lang}.json`);
        const data = await response.json();
        setTranslations(data);
    };

    // Charger les traductions au montage du composant ou changement de langue
    useEffect(() => {
        loadTranslations(language);
    }, [language]);

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsSuccess(false);
        setIsError(false);

        try {
            const response = await fetch('https://formspree.io/f/meoezber', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                setIsError(true);
            }
        } catch (error) {
            setIsError(true);
        }
    };

    const openModal = (src: string) => {
        setVideoSrc(src);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setVideoSrc('');
    };

    return (
        <div className="gap-16 font-mono text-white bg-[#010e28]
        bg-[linear-gradient(to_bottom,_#082740_1px,_transparent_1px),_linear-gradient(to_right,_#082740_1px,_transparent_1px)] [background-size:30px_30px] bg-center animate-bgmove">
            <Head>
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap"/>
            </Head>

            <header className="text-center sm:text-left animate__animated animate__fadeIn animate__delay-1s mb-3">
                <div className="p-16">
                    {/* Afficher le contenu traduit uniquement si les traductions sont chargées */}
                    {translations && (
                        <>
                            <h1 className="font-extrabold">
                                {translations.greeting} <span className="text-yellow-500">Syphax</span>
                            </h1>
                            <br/>
                            <p className="text-l">{translations.description}</p>
                        </>
                    )}
                </div>

                {/* Bouton EN | FR pour changer la langue */}
                <div className="absolute top-4 right-4">
                    <button
                        onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                        className="bg-white text-black py-2 px-6 shadow-md transform transition-all duration-300 ease-in-out hover:bg-yellow-500 hover:text-white hover:shadow-xl focus:outline-none ">
                        {language === 'en' ? 'FR' : 'EN'}
                    </button>
                </div>

                <div className="icons-slider-container w-full overflow-hidden relative">
                    <div className="icons-slider flex gap-8">
                        {[...Array(2)].map((_, idx) => (
                            <div key={idx} className="flex items-center gap-8 shrink-0">
                                <Image src="/flutter.svg" alt="Flutter logo" width={48} height={48}/>
                                <Image src="/dart.svg" alt="Dart logo" width={48} height={48}/>
                                <Image src="/github-mark-white.svg" alt="GitHub logo" width={48} height={48}/>
                                <Image src="/firebase.png" alt="Firebase logo" width={48} height={48}/>
                                <Image src="/azure.png" alt="Azure logo" width={48} height={48}/>
                                <Image src="/oracle.png" alt="Oracle logo" width={48} height={48}/>
                                <Image src="/sql.png" alt="SQL logo" width={48} height={48}/>
                                <Image src="/react.png" alt="React logo" width={48} height={48}/>
                                <Image src="/php.png" alt="PHP logo" width={48} height={48}/>
                                <Image src="/vue.png" alt="Vue logo" width={48} height={48}/>
                                <Image src="/tf.png" alt="TensorFlow logo" width={48} height={48}/>
                                <Image src="/langchain.png" alt="LangChain logo" width={48} height={48}/>
                                <Image src="/R.png" alt="R logo" width={48} height={48}/>
                                <Image src="/flask.png" alt="Flask logo" width={48} height={48}/>
                                <Image src="/Azure_Cosmos_DB.svg" alt="Cosmos logo" width={80} height={80}/>
                            </div>
                        ))}
                    </div>
                </div>
            </header>


            <section id="connect" className="bg-gray-800 text-white p-8 rounded-lg shadow-md">
                <h2 className=" font-bold text-center mb-6 sm:mb-8">
                    {translations?.connectHeader || 'Social Media'}
                </h2>
                <p className=" text-center mb-4">
                    {translations?.connectDescription || 'Here are some platforms where you can find me'}
                </p>
                <div className="flex justify-center space-x-4 sm:space-x-6 pt-5">
                    <a
                        href="https://github.com/syphaxlch"
                        target="_blank"
                        aria-label="Visit my GitHub profile"
                        className="p-3 sm:p-4 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-110 hover:brightness-110 hover:drop-shadow-xl bg-transparent sm:bg-gradient-to-r sm:from-gray-700 sm:to-gray-900 lg:bg-gradient-to-r lg:from-gray-700 lg:to-gray-900"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="GitHub"
                            className="rounded-lg transition-all duration-300"
                        />
                        <span className="text-white font-semibold hidden sm:inline">GitHub</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/syphaxlch"
                        target="_blank"
                        aria-label="Visit my LinkedIn profile"
                        className="p-3 sm:p-4 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-110 hover:brightness-110 hover:drop-shadow-xl bg-transparent sm:bg-gradient-to-r sm:from-blue-500 sm:to-blue-700 lg:bg-gradient-to-r lg:from-blue-500 lg:to-blue-700"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                            alt="LinkedIn"
                            className="rounded-lg transition-all duration-300"
                        />
                        <span className="text-white font-semibold hidden sm:inline">LinkedIn</span>
                    </a>

                    <a
                        href="https://discord.com/users/904655608828010517"
                        target="_blank"
                        aria-label="Visit my Discord profile"
                        className="p-3 sm:p-4 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-110 hover:brightness-110 hover:drop-shadow-xl bg-transparent sm:bg-gradient-to-r sm:from-purple-600 sm:to-indigo-700 lg:bg-gradient-to-r lg:from-purple-600 lg:to-indigo-700"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2111/2111370.png"
                            alt="Discord"
                            className="rounded-lg transition-all duration-300"
                        />
                        <span className="text-white font-semibold hidden sm:inline">Discord</span>
                    </a>

                </div>
            </section>

            <section id="projects-education"
                     className="bg-gray-800 text-white p-4 rounded-lg shadow-md animate__animated animate__fadeIn animate__delay-2s">
                <div className="flex justify-center gap-8 mb-12">
                    <button
                        className={`text-lg font-semibold ${activeSection === 'projects' ? ' text-yellow-500 border-b-4 border-yellow-500' : 'text-white '}`}
                        onClick={() => setActiveSection('projects')}>
                        <i className="fas fa-project-diagram animate__animated animate__fadeIn animate__delay-1s"></i>
                        {translations?.projectsEducationHeader || 'My Projects'}
                    </button>
                    <button
                        className={`text-lg font-semibold ${activeSection === 'education' ? 'text-yellow-500 border-b-4 border-yellow-500' : 'text-white'}`}
                        onClick={() => setActiveSection('education')}>
                        <i className="fas fa-graduation-cap animate__animated animate__fadeIn animate__delay-1s"></i>
                        Education
                    </button>
                </div>

                {activeSection === 'projects' ? (
                    <div>
                        <p className="text-center mb-12">{translations?.projectsDescription || 'Here are some personal projects I have worked on.'}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[{
                                title: "Flutter Quiz App",
                                description: "A Flutter mobile app for creating interactive quizzes.",
                                techs: ["/flutter.svg", "/dart.svg", "/firebase.png"],
                                link: "https://github.com/syphaxlch/Flutter_quiz_app",
                                demo: "quiz-flutter.gif",
                            },
                                {
                                    title: "PHP Ecommerce",
                                    description: "An e-commerce site built with PHP, including user management.",
                                    techs: ["/php.svg", "/apache.svg"],
                                    link: "https://github.com/syphaxlch/PHP-ecommerce",
                                    demo: "",
                                },
                                {
                                    title: "Extension for Email Filtering (with LLM)",
                                    description: "A Chrome extension using LangChain and Flask for classifying emails.",
                                    techs: ["/Flask.svg", "/Llama3.png", "/langchain.png"],
                                    link: "https://github.com/syphaxlch/Email_Analysis_with_LLM",
                                    demo: "/llm-demo.mp4",
                                },
                                {
                                    title: "Azure DevOps - VM Scale Set",
                                    description: "Automating the deployment of a VM Scale Set on Azure.",
                                    techs: ["/azure.png", "/DevOps.svg"],
                                    link: "https://github.com/syphaxlch/8CLD201_Devoir1",
                                    demo: "",
                                }].map((project, index) => (
                                <div key={index}
                                     className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 transition-all duration-300 hover:scale-105">
                                    <h3 className="font-semibold text-white mb-4">{project.title}</h3>
                                    <p className="text-white mb-4">{project.description}</p>
                                    <div className="flex gap-4 mb-4">
                                        {project.techs.map((tech, i) => (
                                            <Image key={i} src={tech} alt="Tech logo" width={35} height={35}/>
                                        ))}
                                    </div>
                                    <a href={project.link}
                                       className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                                        Code
                                    </a>
                                    <a
                                        href={project.demo ? project.demo : '#'}
                                        onClick={(e) => {
                                            if (!project.demo) e.preventDefault();
                                            else openModal(project.demo);
                                        }}
                                        className={`font-bold py-2 px-4 rounded border transition duration-300 ml-5 
                ${project.demo
                                            ? 'cursor-pointer text-white border-white hover:bg-white hover:text-purple-600'
                                            : 'cursor-not-allowed text-gray-500 border-gray-500 pointer-events-none'
                                        }`}
                                    >
                                        Demo
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className="text-center mb-12">{translations?.educationDescription || 'Here is an overview of my academic background.'}</p>
                        <div className="space-y-8">
                            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8">
                                <h3 className="text-2xl font-semibold text-white mb-4">{translations?.bachelorCS || "Bachelor's in Computer Science"}</h3>
                                <p className="text-sm text-white mb-2">{translations?.bachelorCSDetails || 'Université du Québec à Chicoutimi (UQAC), Chicoutimi, QC'}</p>
                                <p className="text-sm text-white">Fall 2023 - Winter 2026</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8">
                                <h3 className="text-2xl font-semibold text-white mb-4">{translations?.mastersSE || "Master's in Systems Engineering"}</h3>
                                <p className="text-sm text-white mb-2">{translations?.mastersSEDetails || 'Mouloud Mammeri University of Tizi-Ouzou (UMMTO), Tizi-Ouzou, Algeria'}</p>
                                <p className="text-sm text-white">Fall 2022 - Winter 2023</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8">
                                <h3 className="text-2xl font-semibold text-white mb-4">{translations?.bachelorCSSystems || "Bachelor's in Computer Systems"}</h3>
                                <p className="text-sm text-white mb-2">{translations?.bachelorCSSystemsDetails || 'Mouloud Mammeri University of Tizi-Ouzou (UMMTO), Tizi-Ouzou, Algeria'}</p>
                                <p className="text-sm text-white">Fall 2019 - Winter 2022</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8">
                                <h3 className="text-2xl font-semibold text-white mb-4">{translations?.mathCS || "Mathematics-Computer Science"}</h3>
                                <p className="text-sm text-white mb-2">{translations?.mathCSDetails || 'Mouloud Mammeri University of Tizi-Ouzou (UMMTO), Tizi-Ouzou, Algeria'}</p>
                                <p className="text-sm text-white">Fall 2018 - Winter 2019</p>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* Modal Demo */}
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg w-4/5 md:w-1/2">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-semibold">{translations?.demo || 'Demo'}</h3>
                            <button onClick={closeModal} className="text-xl text-red-600">X</button>
                        </div>
                        <div className="w-full">
                            <video controls className="w-full rounded-lg">
                                <source src={videoSrc} type="video/mp4"/>
                                Votre navigateur ne prend pas en charge les vidéos HTML5.
                            </video>
                        </div>
                    </div>
                </div>
            )}


            <section id="realtime-activities" className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                <h2 className="font-bold text-center mb-4">{translations?.realtimeActivitiesHeader || "What I'm Doing in Real Time"}</h2>
                <p className="text-center mb-8">
                    {translations?.realtimeActivitiesDescription || "Here’s what I’m currently working on and learning in realtime."}
                </p>
                <div className="space-y-8">

                    {/* Machine Learning for Data Science */}
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8">
                        <h2 className="font-semibold mb-4">{translations?.machineLearningCourse || "Machine Learning for Data Science (UQAC)"}</h2>
                        <p className="text-white mb-4">
                            {translations?.machineLearningDescription || "I’m currently enrolled in a course that covers both supervised and unsupervised learning algorithms, applied to real-world predictive analytics problems. I’m gaining hands-on experience with tools like Scikit-Learn and Python."}
                        </p>
                        <a href="https://programmes.uqac.ca/8iar403" target="_blank"
                           className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                            {translations?.viewCourseLink1 || "View the course"}
                        </a>
                    </div>

                    {/* Cloud Computing */}
                    <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-8">
                        <h2 className="font-semibold mb-4">{translations?.cloudComputingCourse || "Cloud Computing (UQAC)"}</h2>
                        <p className=" text-white mb-4">
                            {translations?.cloudComputingDescription || "I’m currently taking a course in cloud computing, focusing on cloud infrastructure, containerization (Kubernetes, Docker), CI/CD pipelines, and advanced topics such as cloud storage, security, and machine learning in the cloud."}
                        </p>
                        <a href="https://programmes.uqac.ca/8CLD202" target="_blank"
                           className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                            {translations?.viewCourseLink2 || "View the course"}
                        </a>
                    </div>

                    {/* Data Visualization Tools */}
                    <div className="bg-gradient-to-r from-yellow-600 to-red-600 rounded-lg p-8">
                        <h2 className="font-semibold mb-4">{translations?.dataVisualizationToolsCourse || "Data Visualization Tools (UQAC)"}</h2>
                        <p className=" text-white mb-4">
                            {translations?.dataVisualizationToolsDescription || "I’m currently taking a course on mastering the methodology, design, and deployment of data visualization tools. I’m learning how to develop dashboards, analyze needs, and ensure security and governance of the tools after deployment."}
                        </p>
                        <a href="https://programmes.uqac.ca/8INF416" target="_blank"
                           className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                            {translations?.viewCourseLink3 || "View the course"}
                        </a>
                    </div>

                    {/* Security Vulnerabilities Management */}
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-8">
                        <h2 className="font-semibold mb-4">{translations?.securityVulnerabilitiesManagementCourse || "Security Vulnerabilities Management (UQAC)"}</h2>
                        <p className=" text-white mb-4">
                            {translations?.securityVulnerabilitiesManagementDescription || "I’m currently taking a course that focuses on managing system vulnerabilities, security incidents, and response stages. It covers topics like secure coding (OWASP), vulnerability scanning, incident response, and cryptography, with practical applications in security intelligence and risk management."}
                        </p>
                        <a href="https://programmes.uqac.ca/8SEC201" target="_blank"
                           className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                            {translations?.viewCourseLink4 || "View the course"}
                        </a>
                    </div>

                    {/* Deep Learning with Keras and TensorFlow */}
                    <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg p-8">
                        <h2 className="font-semibold mb-4">{translations?.deepLearningBook || "Deep Learning with Keras and TensorFlow - 3rd Edition"}</h2>
                        <p className=" text-white mb-4">
                            {translations?.deepLearningDescription || "I’m reading the book 'Deep Learning with Keras and TensorFlow - 3rd Edition,' which covers practical applications of deep learning using the Keras and TensorFlow libraries. The book includes real-world case studies and examples, allowing hands-on learning in the field of deep learning."}
                        </p>
                        <a href="https://www.amazon.com/Deep-Learning-Keras-TensorFlow-Edition/dp/1800569023"
                           target="_blank"
                           className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                            {translations?.viewBookLink || "View the book"}
                        </a>
                    </div>

                    {/* Developing Microservices with .NET */}
                    <div className="bg-gradient-to-r from-blue-800 to-indigo-600 rounded-lg p-8">
                        <h2 className="font-semibold mb-4">{translations?.microservicesCourse || "Developing Microservices with .NET (Microsoft)"}</h2>
                        <a href="https://learn.microsoft.com/fr-ca/training/modules/dotnet-microservices/"
                           target="_blank"
                           className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                            {translations?.viewCourseLink5 || "View the course"}
                        </a>
                    </div>

                </div>
            </section>


            <section id="achievements" className="bg-gray-800 text-white p-16 rounded-lg shadow-md">
                <h2 className=" font-bold text-center mb-8">
                    {translations?.achievementsHeader || "Achievements"}
                </h2>
                <p className="text-center mb-8">
                    {translations?.achievementsDescription || "Here are some of my certifications and achievements."}
                </p>
                <div className="space-y-8">

                    {/* Cybersecurity Badge */}
                    <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-8">
                        <h3 className="font-semibold mb-4">
                            {translations?.cybersecurityBadgeTitle || "Cybersecurity Badge - TryHackMe"}
                        </h3>
                        <iframe
                            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1333986"
                            style={{border: 'none', width: '100%', height: '150px'}}
                        ></iframe>
                    </div>

                    {/* Microsoft Certification */}
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8">
                        <h3 className="font-semibold mb-4">
                            {translations?.microsoftCertificationTitle || "Microsoft Certification - Prepare to develop AI solutions on Azure"}
                        </h3>
                        <a href="https://learn.microsoft.com/api/achievements/share/en-us/SyphaxLakhdarchaouche-6739/ZKW6EBM2?sharingId=FC41748111551AD2"
                           target="_blank"
                           className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                            {translations?.viewCertificationLink || "Certificate"}
                        </a>
                    </div>

                </div>
            </section>

            <section id="contact"
                     className="bg-gray-800 text-white p-16 rounded-lg shadow-md animate__animated animate__fadeIn animate__delay-2s">
                <h2 className="text-4xl font-bold text-center mb-8">
                    {translations?.contactHeader || "Contact Me"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-semibold">
                            {translations?.nameLabel || "Name"}
                        </label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                               className="bg-gray-700 text-white p-3 rounded-lg" required/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-semibold">
                            {translations?.emailLabel || "Email"}
                        </label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                               className="bg-gray-700 text-white p-3 rounded-lg" required/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm font-semibold">
                            {translations?.messageLabel || "Message"}
                        </label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                                  className="bg-gray-700 text-white p-3 rounded-lg" required/>
                    </div>

                    <button type="submit"
                            className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition">
                        {translations?.sendMessageButton || "Send Message"}
                    </button>
                </form>

                {isSuccess && (
                    <div className="text-center text-green-500 mt-4">
                        {translations?.messageSuccess || "Your message has been sent successfully!"}
                    </div>
                )}
                {isError && (
                    <div className="text-center text-red-500 mt-4">
                        {translations?.messageError || "There was an error, please try again later."}
                    </div>
                )}
            </section>

            <footer className="w-full text-center text-gray-400 mt-10 py-4">
                {translations?.footerText ? translations.footerText.replace("{year}", new Date().getFullYear()) : `© ${new Date().getFullYear()} Syphax LAKHDARCHAOUCHE All rights reserved.`}
            </footer>

        </div>
    );
}
