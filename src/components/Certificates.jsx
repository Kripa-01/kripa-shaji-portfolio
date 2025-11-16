import React, { useState } from 'react'
import Aicertificates from '../assets/Aicertificates.jpg'
import CanaryDigital from '../assets/CanaryDigital.jpg'

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  const certificates = [
    {
      id: 1,
      title: "AI & ML Expert Certification",
      issuer: "Technovalley",
      date: "May 2025",
      description: "Certification in recognition of participation and successful completion of the ML Expert program",
      image: Aicertificates,
      skills: ["Machine Learning", "Artificial Intelligence", "Data Science"]
    },
    {
      id: 2,
      title: "AI Applications Internship",
      issuer: "Canary Digital",
      date: "August 18 - September 17, 2025",
      description: "Completed internship in Artificial Intelligence Applications at Canary Digital, Aluva, Kerala. Played a key role in developing AI-powered Voice Agent, contributing to dialogue design, voice interaction workflows, and intelligent agent integration. Also supported Computer Vision application initiatives with hands-on exposure to real-time image analysis.",
      image: CanaryDigital,
      skills: ["Voice AI", "NLP", "Computer Vision", "Dialogue Design", "UX Design"]
    }
  ]

  const CertificateModal = ({ cert, onClose }) => {
    if (!cert) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold text-gray-800">{cert.title}</h3>
              <button 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-3xl font-bold leading-none"
              >
                ×
              </button>
            </div>
            
            {/* Certificate Image */}
            <div className="mb-6 bg-gray-50 rounded-lg w-1/2 h-1/2 overflow-hidden">
              <img 
                src={cert.image} 
                alt={cert.title}
                className="w-full h-auto"
              />
            </div>

            <div className="mb-4">
              <p className="text-lg text-gray-600 mb-2">
                <span className="font-semibold">Issued by:</span> {cert.issuer}
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-semibold">Date:</span> {cert.date}
              </p>
              <p className="text-gray-700 mb-4">{cert.description}</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional certifications and completed programs showcasing my expertise in AI and Machine Learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <svg 
                      className="w-8 h-8 text-blue-600" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" 
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50">
                <h3 className="text-lg font-bold text-gray-800 text-center">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600 text-center mt-1">{cert.issuer} • {cert.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
            <div className="text-gray-600">Certifications</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-purple-600 mb-2">6+</div>
            <div className="text-gray-600">Skills Validated</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-green-600 mb-2">1</div>
            <div className="text-gray-600">Internship</div>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="text-3xl font-bold text-orange-600 mb-2">2025</div>
            <div className="text-gray-600">Recent Year</div>
          </div>
        </div>
      </div>

      {/* Certificate Detail Modal */}
      {selectedCert && (
        <CertificateModal 
          cert={selectedCert} 
          onClose={() => setSelectedCert(null)} 
        />
      )}
    </section>
  )
}

export default Certificates