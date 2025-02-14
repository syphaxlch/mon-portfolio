'use client';

import { useState } from 'react';
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
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
        bg-[linear-gradient(to_bottom,_#082740_1px,_transparent_1px),_linear-gradient(to_right,_#082740_1px,_transparent_1px)] [background-size:30px_30px] bg-center animate-bgmove ">
            <Head>
                {/* eslint-disable-next-line @next/next/no-page-custom-font */}
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap"/>

            </Head>


            <header className="text-center sm:text-left animate__animated animate__fadeIn animate__delay-1s mb-3">
                <div className="p-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold">
                        Hi, I&#39;m <span className="text-yellow-500">Syphax</span>
                    </h1>
                    <br/>
                    <p className="text-l">Computer science student, I blend curiosity and efficiency to craft
                        solutions that are both innovative and practical.</p>
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
            <section id="connect" className="bg-gray-800 text-white m-6 p-16 rounded-lg shadow-md">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
                    Connect with Me
                </h2>
                <p className="text-base sm:text-lg text-center mb-8">
                    Feel free to reach out and connect with me on these platforms.
                </p>
                <div className="flex justify-center space-x-4 sm:space-x-6 pt-5">
                    <a
                        href="https://github.com/syphaxlch"
                        target="_blank"
                        className="p-3 sm:p-4 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-110 hover:brightness-110 hover:drop-shadow-xl
  bg-transparent sm:bg-gradient-to-r sm:from-gray-700 sm:to-gray-900 lg:bg-gradient-to-r lg:from-gray-700 lg:to-gray-900"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="GitHub"
                            className=" rounded-lg transition-all duration-300"
                        />
                        <span className="text-white font-semibold hidden sm:inline">GitHub</span>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/syphaxlch"
                        target="_blank"
                        className="p-3 sm:p-4 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-110 hover:brightness-110 hover:drop-shadow-xl
                              bg-transparent sm:bg-gradient-to-r sm:from-blue-500 sm:to-blue-700 lg:bg-gradient-to-r lg:from-blue-500 lg:to-blue-700"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
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
                        className="p-3 sm:p-4 rounded-lg flex items-center space-x-2 transition-all duration-300 transform hover:scale-110 hover:brightness-110 hover:drop-shadow-xl
                        bg-transparent sm:bg-gradient-to-r sm:from-purple-600 sm:to-indigo-700 lg:bg-gradient-to-r lg:from-purple-600 lg:to-indigo-700"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
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
                     className="bg-gray-800 text-white p-16 rounded-lg shadow-md animate__animated animate__fadeIn animate__delay-2s">
                <div className="flex justify-center gap-8 mb-12">
                    <button
                        className={`text-lg font-semibold ${activeSection === 'projects' ? ' text-yellow-500 border-b-4 border-yellow-500' : 'text-white '}`}
                        onClick={() => setActiveSection('projects')}>
                        <i className="fas fa-project-diagram animate__animated animate__fadeIn animate__delay-1s"></i>
                        My Projects
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
                        <p className="text-center text-lg mb-12">Here are some personal projects I have worked on.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[{
                                title: "Flutter Quiz App",
                                description: "A Flutter mobile app for creating interactive quizzes.",
                                techs: ["/flutter.svg", "/dart.svg", "/firebase.png"],
                                link: "https://github.com/syphaxlch/Flutter_quiz_app",
                                demo: "quiz-flutter.gif", // Lien vers la vidéo locale
                            },
                                {
                                    title: "PHP Ecommerce",
                                    description: "An e-commerce site built with PHP, including user management.",
                                    techs: ["/php.svg", "/apache.svg"],
                                    link: "https://github.com/syphaxlch/PHP-ecommerce",
                                    demo: "", // Lien vers la vidéo locale
                                },
                                {
                                    title: "Extension for Email Filtering (with LLM)",
                                    description: "A Chrome extension using LangChain and Flask for classifying emails.",
                                    techs: ["/flask.svg", "/llama3.png", "/langchain.png"],
                                    link: "https://github.com/syphaxlch/Email_Analysis_with_LLM",
                                    demo: "/llm-demo.mp4", // Lien vers la vidéo locale
                                },
                                {
                                    title: "Azure DevOps - VM Scale Set",
                                    description: "Automating the deployment of a VM Scale Set on Azure.",
                                    techs: ["/azure.png", "/devops.svg"],
                                    link: "https://github.com/syphaxlch/8CLD201_Devoir1",
                                    demo: "",
                                }].map((project, index) => (
                                <div key={index}
                                     className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 transition-all duration-300 hover:scale-105">
                                    <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                                    <p className="text-sm text-white mb-4">{project.description}</p>
                                    <div className="flex gap-4 mb-4">
                                        {project.techs.map((tech, i) => (
                                            <Image key={i} src={tech} alt="Tech logo" width={48} height={48}/>
                                        ))}
                                    </div>
                                    <a href={project.link}
                                       className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                                        View Project
                                    </a>
                                    <a
                                        href={project.demo ? project.demo : '#'}
                                        onClick={(e) => {
                                            if (!project.demo) e.preventDefault(); // Empêche le clic si pas de lien
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
                        <p className="text-center text-lg mb-12">Here is an overview of my academic background.</p>
                        <div className="space-y-8">
                            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8">
                                <h3 className="text-2xl font-semibold text-white mb-4">Bachelor&#39;s in Computer
                                    Science</h3>
                                <p className="text-sm text-white mb-2">Université du Québec à Chicoutimi (UQAC),
                                    Chicoutimi, QC
                                </p>
                                <p className="text-sm text-white">Fall 2023 - Winter 2026</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8">
                                <h3 className="text-2xl font-semibold text-white mb-4">Master&#39;s in Systems
                                    Engineering</h3>
                                <p className="text-sm text-white mb-2">Mouloud Mammeri University of Tizi-Ouzou
                                    (UMMTO), Tizi-Ouzou, Algeria</p>
                                <p className="text-sm text-white">Fall 2022 - Winter 2023</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8">
                                <h3 className="text-2xl font-semibold text-white mb-4">Bachelor&#39;s in Computer
                                    Systems</h3>
                                <p className="text-sm text-white mb-2">
                                    Mouloud Mammeri University of Tizi-Ouzou
                                    (UMMTO), Tizi-Ouzou, Algeria</p>
                                <p className="text-sm text-white">Fall 2019 - Winter 2022</p>
                            </div>

                            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8">
                                <h3 className="text-2xl font-semibold text-white mb-4">Mathematics-Computer Science</h3>
                                <p className="text-sm text-white mb-2">
                                    Mouloud Mammeri University of Tizi-Ouzou
                                    (UMMTO), Tizi-Ouzou, Algeria</p>
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
                            <h3 className="text-xl font-semibold">Demo</h3>
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


            <section id="realtime-activities" className="bg-gray-800 text-white p-16 rounded-lg shadow-md">
                <h2 className="font-bold text-center mb-8">What I&#39;m Doing in Real Time</h2>
                <p className="text-center text-lg mb-8">Here’s what I’m currently working on and learning in real
                    time.</p>
                <div className="space-y-8">


                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8">
                        <h3 className="font-semibold mb-4">Machine Learning for Data Science (UQAC)</h3>
                        <p className="text-sm text-white mb-4">I’m currently enrolled in a course that covers both
                            supervised and unsupervised learning algorithms, applied to real-world predictive analytics
                            problems. I’m gaining hands-on experience with tools like Scikit-Learn and Python.</p>
                        <a href="https://programmes.uqac.ca/8iar403" target="_blank"
                           className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                            View the course
                        </a>
                    </div>

                    <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-8">
                        <h3 className="font-semibold mb-4">Cloud Computing (UQAC)</h3>
                        <p className="text-sm text-white mb-4">I’m currently taking a course in cloud computing,
                            focusing on cloud infrastructure, containerization (Kubernetes, Docker), CI/CD pipelines,
                            and advanced topics such as cloud storage, security, and machine learning in the cloud.</p>
                        <a href="https://programmes.uqac.ca/8CLD202" target="_blank"
                           className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                            View the course
                        </a>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-600 to-red-600 rounded-lg p-8">
                        <h3 className=" font-semibold mb-4">Data Visualization Tools (UQAC)</h3>
                        <p className="text-sm text-white mb-4">I’m currently taking a course on mastering the
                            methodology, design, and deployment of data visualization tools. I’m learning how to develop
                            dashboards, analyze needs, and ensure security and governance of the tools after
                            deployment.</p>
                        <a href="https://programmes.uqac.ca/8INF416" target="_blank"
                           className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                            View the course
                        </a>
                    </div>

                    <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-lg p-8">
                        <h3 className=" font-semibold mb-4">Security Vulnerabilities Management (UQAC)</h3>
                        <p className="text-sm text-white mb-4">I’m currently taking a course that focuses on managing
                            system vulnerabilities, security incidents, and response stages. It covers topics like
                            secure coding (OWASP), vulnerability scanning, incident response, and cryptography, with
                            practical applications in security intelligence and risk management.</p>
                        <a href="https://programmes.uqac.ca/8SEC201" target="_blank"
                           className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                            View the course
                        </a>
                    </div>

                    <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg p-8">
                        <h3 className=" font-semibold mb-4">Deep Learning with Keras and TensorFlow - 3rd
                            Edition</h3>
                        <p className="text-sm text-white mb-4">I’m reading the book &#34;Deep Learning with Keras and
                            TensorFlow - 3rd Edition,&#34; which covers practical applications of deep learning using
                            the
                            Keras and TensorFlow libraries. The book includes real-world case studies and examples,
                            allowing hands-on learning in the field of deep learning.</p>
                        <a href="https://www.amazon.com/Deep-Learning-Keras-TensorFlow-Edition/dp/1800569023"
                           target="_blank"
                           className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                            View the book
                        </a>
                    </div>

                    <div className="bg-gradient-to-r from-blue-800 to-indigo-600 rounded-lg p-8">
                        <h3 className=" font-semibold mb-4">Developing Microservices with .NET (Microsoft)</h3>
                        <p className="text-sm text-white mb-4">I’m currently learning how to develop and deploy
                            microservices using .NET. The course covers designing, developing, and deploying
                            microservices with modern technologies and practices, helping you build scalable, reliable,
                            and performant applications.</p>
                        <a href="https://learn.microsoft.com/fr-ca/training/modules/dotnet-microservices/"
                           target="_blank"
                           className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                            View the course
                        </a>
                    </div>
                </div>
            </section>


            <section id="achievements" className="bg-gray-800 text-white p-16 rounded-lg shadow-md">
                <h2 className="text-4xl font-bold text-center mb-8">Achievements</h2>
                <p className="text-center text-lg mb-8">Here are some of my certifications and achievements.</p>
                <div className="space-y-8">

                    <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-lg p-8">
                        <h3 className=" font-semibold mb-4">Cybersecurity Badge - TryHackMe</h3>
                        <iframe
                            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1333986"
                            style={{border: 'none', width: '100%', height: '150px'}}>
                        </iframe>
                        <p className="text-sm text-white mt-2">My progress and achievements in cybersecurity
                            challenges.</p>
                    </div>

                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8">
                        <h3 className="font-semibold mb-4">Microsoft Certification - Prepare to develop AI
                            solutions on Azure</h3>
                        <p className="text-sm text-white mb-4">Certified in designing and developing microservices with
                            .NET, covering modern cloud-based application architectures.</p>
                        <a href="https://learn.microsoft.com/api/achievements/share/en-us/SyphaxLakhdarchaouche-6739/ZKW6EBM2?sharingId=FC41748111551AD2"
                           target="_blank"
                           className="text-white hover:text-gray-200 font-bold py-2 px-4 rounded bg-transparent border border-white hover:bg-white transition duration-300">
                            View Certification
                        </a>
                    </div>

                </div>
            </section>


            <section id="contact"
                     className="bg-gray-800 text-white p-16 rounded-lg shadow-md animate__animated animate__fadeIn animate__delay-2s">
                <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
                <p className="text-center text-lg mb-12">Send me a message, I would be happy to answer your
                    questions.</p>

                <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-semibold">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                               className="bg-gray-700 text-white p-3 rounded-lg" required/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-semibold">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                               className="bg-gray-700 text-white p-3 rounded-lg" required/>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="message" className="text-sm font-semibold">Message</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                                  className="bg-gray-700 text-white p-3 rounded-lg" required/>
                    </div>

                    <button type="submit"
                            className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition">
                        Send Message
                    </button>
                </form>

                {isSuccess && (
                    <div className="text-center text-green-500 mt-4">Your message has been sent successfully!</div>
                )}
                {isError && (
                    <div className="text-center text-red-500 mt-4">There was an error, please try again later.</div>
                )}
            </section>


            <footer className="w-full text-center text-gray-400 mt-10 py-4 ">
                © {new Date().getFullYear()} Syphax LAKHDARCHAOUCHE All rights reserved.
            </footer>

        </div>
    );
}
