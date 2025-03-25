import { FaLinkedin, FaMedium } from "react-icons/fa"; // Importing icons for LinkedIn and Medium

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Bigyan Kalakheti. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/bigyan-kalakheti-4664bb292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            {/* Medium Link */}
            <a
              href="https://medium.com/@bigyankalakheti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              <FaMedium size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
