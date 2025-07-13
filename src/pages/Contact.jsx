import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-red-400 text-center">📞 Contact Me</h2>

      <div className="space-y-4 text-lg">
        <p className="flex items-center gap-3">
          <FaEnvelope className="text-blue-400" />
          <a
            href="mailto:sandhiya070497@gmail.com"
            className="hover:underline text-gray-300"
          >
            sandhiya070497@gmail.com
          </a>
        </p>

        <p className="flex items-center gap-3">
          <FaPhone className="text-green-400" />
          <span className="text-gray-300">+91 9600921079</span>
        </p>

        <p className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-yellow-400" />
          <span className="text-gray-300">Chennai, India</span>
        </p>

        <p className="flex items-center gap-3">
          <FaLinkedin className="text-blue-500" />
          <a
            href="https://linkedin.com/in/sandhiya-r-90b990328"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-gray-300"
          >
            linkedin.com/in/sandhiya-r-90b990328
          </a>
        </p>
      </div>
    </section>
  );
}
