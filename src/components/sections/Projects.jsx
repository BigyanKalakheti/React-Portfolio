import { RevealOnScroll } from "../RevealOnScroll";
import { FaGlobe, FaGithub } from "react-icons/fa";

export const Projects = () => {
  const projectData = [
    {
      name: "P2P File-Share",
      description:
        "A secure P2P file-sharing app with end-to-end encryption using AES, ECC and RC4, ensuring private and direct transfers via WebRTC.",
      technologies: ["Next.js", "Node.js", "WebRTC", "Socket.io"],
      website: "https://file-share-next-three.vercel.app", // Replace with actual URL or leave as null if not available
      github: "https://github.com/BigyanKalakheti/FileShare.git",
    },
    {
      name: "PYcat",
      description:
        "A Python-based Netcat alternative for remote command execution, file transfer, and interactive shell access over TCP.",
      technologies: ["Python"],
      website: null,
      github: "https://github.com/BigyanKalakheti/PYcat.git",
    },
    {
      name: "Bus Booking",
      description:
        "Full-stack application that allows users to register, browse available buses, book tickets, and make payments through Stripe",
      technologies: ["MongoDB", "Node.js", "React.js", "Express.js"],
      website: null, // No website for this project
      github: "https://github.com/BigyanKalakheti/Bus-Booking.git",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                      >
                        <FaGlobe /> Website
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Link */}
          <div className="mt-8 text-center">
            <a
              href="https://github.com/BigyanKalakheti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors text-xl"
            >
              See More Projects →
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
