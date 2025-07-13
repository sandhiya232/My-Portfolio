import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

// import heroImage from '../assets/hero.png';
export default function Home() {
    return (
        <main className="w-full max-w-6xl mx-auto px-4 py-10">
            {/* Hero Section */}
            <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto py-10">
                {/* Left Text Content */}
                <div className="md:w-1/2 space-y-6">
                    <p className="text-green-400 font-mono">Hello There! I am</p>
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white">SANDHIYA R</h1>
                    <p className="text-gray-300 text-lg max-w-md">
                        A passionate Software Engineer with experience in Web Development, Python, Django, Ionic, and more.
                    </p>
                    <Link
                        to="/resume"
                        className="inline-block px-6 py-2 mt-4 bg-green-500 text-black font-semibold rounded shadow-lg hover:scale-105 transition-all"
                    >
                        View Resume
                    </Link>
                </div>

                {/* Right Hero Image */}
                <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
                    <img
                        src="https://my-portfolio-cbx7.vercel.app/assets/illustrations/header.svg"
                        alt="Coding Illustration"
                        className="w-[80%] md:w-full animate-fadeInUp rounded-xl shadow-lg"
                    />
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20">
                <h2 className="text-7xl font-extrabold text-center text-white mb-12">
                    <span className="border-b-4 border-green-400 px-4">Projects</span>
                </h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: 'Engine Warehouse Management',
                            desc: `Built a FIFO-based inventory system using Django REST APIs.
              • Enabled real-time tracking of engine parts
              • Improved stock accuracy and reporting for warehouse staff.`,
                            image: 'https://tse1.mm.bing.net/th/id/OIP.vIsGY6aaHmsPOFoWBAC85gHaEo?pid=Api&P=0&h=180',
                        },
                        {
                            title: 'Engine Inspection Mobile App',
                            desc: `Ionic + Angular mobile app for defect scanning.
              • Enabled on-site engine part inspection
              • Offline support & real-time updates via REST APIs.`,
                            image: 'https://spotterinspectionapp.com/assets/img/tablet-mockup-web.png',
                        },
                        {
                            title: 'Project Resource Web Tool',
                            desc: `Full-stack Django app for managing financials & HR resources.
              • Allowed managers to track time, budget, and allocations
              • Automated reports with PDF & Excel export.`,
                            image: 'https://sandeepchaudhury.files.wordpress.com/2017/06/resources.png',
                        },
                    ].map((project) => (
                        <div
                            key={project.title}
                            className="bg-[#0f0f0f] border border-green-400 rounded-xl p-6 hover:shadow-green-400 shadow-md transition duration-300"
                        >
                            <div className="flex justify-center mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-24 h-24 object-contain rounded-full bg-green-500/10 p-2"
                                />
                            </div>
                            <h3 className="text-green-400 text-xl font-bold mb-2 text-center">{project.title}</h3>
                            <p className="text-gray-300 text-sm text-center whitespace-pre-line">{project.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20">
                <h2 className="text-7xl font-extrabold text-center text-white mb-12">
                    <span className="border-b-4 border-green-400 px-4">About</span>
                </h2>
                <div className="max-w-4xl mx-auto space-y-6 text-gray-300 text-lg leading-relaxed">
                    <p>
                        I’m <span className="text-green-400 font-semibold">Sandhiya R</span>, a passionate Software Engineer with over 3 years of experience in building and maintaining full-stack applications.
                        I specialize in developing scalable web and mobile solutions using modern technologies.
                    </p>
                    <p>
                        I’ve worked extensively with <span className="text-green-400">Python, Django, React, Angular, and Ionic</span> to create real-world applications in domains like warehouse management, inspection automation, and resource tracking.
                        My strong problem-solving skills and attention to detail have helped streamline operations and reduce manual work for clients.
                    </p>
                    <p>
                        I believe in writing clean, maintainable code and continuously improving my skills.
                        I enjoy turning complex challenges into elegant solutions and am highly comfortable working with both frontend and backend stacks.
                    </p>
                    <p>
                        When I’m not coding, I enjoy exploring new tech tools, contributing to side projects, and learning about design systems and DevOps.
                        I’m currently focused on growing as a full-stack engineer and contributing to impactful digital products.
                    </p>
                </div>
            </section>

            <section id="skills" className="py-20">
                <h2 className="text-7xl font-extrabold text-center text-white mb-12">
                    <span className="border-b-4 border-green-400 px-4">Skills</span>
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
                    {[
                        'Python',
                        'Django',
                        'JavaScript',
                        'TypeScript',
                        'Angular',
                        'React.js',
                        'Ionic Framework',
                        'HTML5',
                        'CSS3',
                        'Tailwind CSS',
                        'MongoDB',
                        'SQL Server',
                        'REST APIs',
                        'Firebase Auth',
                        'Git & GitHub',
                        'Postman',
                        'Vite',
                    ].map((skill) => (
                        <div
                            key={skill}
                            className="bg-gray-800 p-4 rounded hover:scale-105 transition-transform duration-200 shadow hover:shadow-green-400"
                        >
                            <p className="text-green-400 font-semibold">{skill}</p>
                        </div>
                    ))}
                </div>
            </section>




            {/* Contact Section */}
             <section id="contact" className="py-20">
      <h2 className="text-7xl font-extrabold text-center text-white mb-12">
        <span className="border-b-4 border-green-400 px-4">Contact</span>
      </h2>

      <p className="text-gray-400 mb-2 text-center flex justify-center items-center gap-2">
        <FaEnvelope className="text-green-400" />
        Email:{" "}
        <a href="mailto:sandhiya070497@gmail.com" className="text-green-600 hover:underline">
          sandhiya070497@gmail.com
        </a>
      </p>

      <p className="text-gray-400 mb-2 text-center flex justify-center items-center gap-2">
        <FaPhone className="text-green-400" />
        Phone: +91 9600921079
      </p>

      <p className="text-gray-400 mb-2 text-center flex justify-center items-center gap-2">
        <FaMapMarkerAlt className="text-green-400" />
        Location: Chennai, India
      </p>

      <p className="text-gray-400 text-center flex justify-center items-center gap-2">
        <FaLinkedin className="text-green-500" />
        <a
          href="https://linkedin.com/in/sandhiya-r-90b990328"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          linkedin.com/in/sandhiya-r-90b990328
        </a>
      </p>
    </section>
        </main>
    );
}
