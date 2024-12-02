import React from 'react';



export default function ModernPortfolio() {

  const projects = [
    {
      title: 'Intelligent Project Management',
      description: 'AI-powered project tracking and collaboration platform',
      technologies: ['Next.js', 'TypeScript', 'Machine Learning', 'GraphQL'],
      image: '/api/placeholder/600/400',
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Decentralized Finance Dashboard',
      description: 'Real-time cryptocurrency analytics and portfolio tracking',
      technologies: ['React', 'Web3', 'Blockchain', 'ChartJS'],
      image: '/api/placeholder/600/400',
      links: {
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Sustainable Urban Mobility App',
      description: 'Smart transportation solution for modern cities',
      technologies: ['Next.js', 'React Native', 'IoT', 'AI'],
      image: '/api/placeholder/600/400',
      links: {
        github: '#',
        live: '#'
      }
    }
  ];

  const skills = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript']
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Python', 'GraphQL', 'Docker']
    },
    {
      category: 'Cloud & DevOps',
      technologies: ['AWS', 'Kubernetes', 'CI/CD', 'Firebase']
    },
    {
      category: 'Tools & Platforms',
      technologies: ['Git', 'Figma', 'Vercel', 'Postman']
    }
  ];
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-center items-center">
          
          <div className="space-x-6">
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition">Skills</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
    
      <header id="about"className="container mx-auto px-4 pt-24 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 ">
            Waqar Un Nabi <br /> <br />
          </h1>
          <h2 className="text-4xl font-bold mb-4 text-gray-900 ">
            Full-Stack Developer & Innovative Technologist
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Transforming complex challenges into elegant digital solutions through cutting-edge technology and creative problem-solving.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                    </svg>
                    <span className="ml-2">GitHub</span>
                  </a>
                  <a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    <span className="ml-2">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="bg-white border rounded-xl p-6 text-center hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {skillGroup.category}
                </h3>
                <div className="space-y-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="bg-gray-100 text-gray-700 px-3 py-2 rounded-full text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Interested in collaboration, have a project in mind, or just want to say hello? 
          Feel free to reach out, and I'll get back to you as soon as possible.
        </p>
        <a 
          href="syedwaqarunnabi@gmail.com" 
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Get In Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center">
        <p className="text-gray-600">
          © 2025 Waqar Un Nabi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}