import { FaBookOpen } from "react-icons/fa";
import certificates from "./certificates";

const Certificate = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-gray-100 via-gray-200 to-gray-100 p-10">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
        My Certificates
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300 relative"
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-56 object-contain bg-gray-50"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-1">
                {cert.title}
              </h2>
              <p className="text-gray-500 italic mb-2">{cert.issuer}</p>
              <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
              <a
                href={cert.link}
                className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBookOpen /> View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;
