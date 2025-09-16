'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Maximize2, X } from 'lucide-react'

export default function Screenshots() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const screenshots = [
    {
      id: 1,
      title: 'Hlavné menu a prehľad aerolinky',
      description: 'Pozrite si svoju aerolinku z ptačej perspektívy a sledujte všetky dôležité metriky.',
      placeholder: 'Screenshot 1 - Hlavné menu'
    },
    {
      id: 2,
      title: 'Spravovanie lietadiel',
      description: 'Kupujte nové lietadlá, modernizujte existujúce a optimalizujte svoju flotilu.',
      placeholder: 'Screenshot 2 - Lietadlá'
    },
    {
      id: 3,
      title: 'Najímanie personálu',
      description: 'Najímajte pilotov, stewardov a iný personál pre svoju aerolinku.',
      placeholder: 'Screenshot 3 - Personál'
    },
    {
      id: 4,
      title: 'Plánovanie letov',
      description: 'Vytvárajte nové lety medzi letiskami po celom svete.',
      placeholder: 'Screenshot 4 - Lety'
    },
    {
      id: 5,
      title: 'Finančné prehľady',
      description: 'Sledujte príjmy, výdavky a ziskovosť svojej aerolinky.',
      placeholder: 'Screenshot 5 - Financie'
    },
    {
      id: 6,
      title: 'Služby na palube',
      description: 'Rozhodujte o jedle, nápojoch a ďalších službách pre pasažierov.',
      placeholder: 'Screenshot 6 - Služby'
    }
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % screenshots.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section id="screenshots" className="py-20 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Screenshoty z hry
          </h2>
          <p className="text-xl text-primary-light max-w-3xl mx-auto">
            Pozrite si, ako vyzerá Airline Manager v akcii. 
            Objavte všetky detaily a funkcie hry.
          </p>
        </div>

        <div className="relative mb-8">
          <div className="bg-primary-medium/30 backdrop-blur-sm rounded-2xl p-8 border border-primary-light/20">
            <div className="relative">
              <div 
                className="bg-primary-light rounded-xl p-8 h-96 flex items-center justify-center cursor-pointer group relative overflow-hidden"
                onClick={openModal}
              >
                <div className="text-center text-primary-dark">
                  <div className="text-6xl mb-4">📱</div>
                  <h3 className="text-2xl font-bold mb-2">
                    {screenshots[currentImage].title}
                  </h3>
                  <p className="text-lg opacity-75">
                    {screenshots[currentImage].placeholder}
                  </p>
                  <p className="text-sm mt-4 opacity-60">
                    Kliknite pre zobrazenie v plnej veľkosti
                  </p>
                </div>
                
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="h-12 w-12 text-white" />
                </div>
              </div>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-dark/80 hover:bg-primary-dark text-white p-3 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-dark/80 hover:bg-primary-dark text-white p-3 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {screenshots[currentImage].title}
              </h3>
              <p className="text-primary-light text-lg">
                {screenshots[currentImage].description}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {screenshots.map((screenshot, index) => (
            <button
              key={screenshot.id}
              onClick={() => setCurrentImage(index)}
              className={`bg-primary-medium/30 backdrop-blur-sm rounded-lg p-4 border transition-all duration-300 ${
                currentImage === index
                  ? 'border-accent-yellow bg-accent-yellow/10'
                  : 'border-primary-light/20 hover:border-primary-light/40'
              }`}
            >
              <div className="bg-primary-light rounded-lg p-4 h-20 flex items-center justify-center">
                <span className="text-2xl">📱</span>
              </div>
              <p className="text-white text-sm mt-2 font-medium text-center">
                {screenshot.title.split(' - ')[0]}
              </p>
            </button>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary-medium/30 backdrop-blur-sm rounded-2xl p-8 border border-primary-light/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pozrite si trailer hry
            </h3>
            <p className="text-primary-light mb-6">
              Presvedčte sa sami o kvalite a zábavnosti Airline Manager
            </p>
            <button className="bg-accent-red hover:bg-accent-red/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center space-x-2 mx-auto">
              <Play className="h-5 w-5" />
              <span>Prehrať trailer</span>
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-accent-yellow transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="bg-primary-light rounded-xl p-8 max-h-[80vh] overflow-auto">
              <div className="text-center text-primary-dark">
                <div className="text-8xl mb-4">📱</div>
                <h3 className="text-3xl font-bold mb-4">
                  {screenshots[currentImage].title}
                </h3>
                <p className="text-xl mb-4">
                  {screenshots[currentImage].placeholder}
                </p>
                <p className="text-lg">
                  {screenshots[currentImage].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}