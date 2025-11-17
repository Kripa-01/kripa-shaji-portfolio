import React from 'react'
import Aicertificates from '../assets/Aicertificates.jpg'
import CanaryDigital from '../assets/CanaryDigital.jpg'
import SplitText from './SplitText'

const Certificates = () => {

  const certificates = [
    {
      id: 1,
      image: Aicertificates
    },
    {
      id: 2,
      image: CanaryDigital
    }
  ]

  return (
    <section id="certificates" className="py-20 ">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            
          </h2>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lime-400 mb-4 tracking-wider">
            <SplitText
              text="CERTIFICATES"
              className="text-lime-400 inline-block cursor-pointer hover:scale-105 transition-transform duration-300"
              delay={80}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50, rotationX: -90 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
              threshold={0.2}
              rootMargin="-50px"
              textAlign="center"
              tag="span"
            />
          </h2>
        </div>

        {/* Only images */}
        <div className="grid md:grid-cols-2 gap-8 ">
          {certificates.map((cert) => (
<div
  key={cert.id}
  className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl 
             transition-all duration-300 cursor-pointer group  bg-white flex"
>
  <div className="relative w-full bg-transparent overflow-hidden flex  justify-center items-center ">

    <img
      src={cert.image}
      alt="Certificate"
      className="
        w-full 
        h-auto 
        object-cover 
        group-hover:scale-105 
        transition-transform 
        duration-300
      "
    />
  </div>
</div>

          ))}
        </div>

      </div>
    </section>
  )
}

export default Certificates
