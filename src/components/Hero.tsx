'use client'

import React, { useState, useEffect } from 'react'
import { Download, Play, Star, Plane } from 'lucide-react'

export default function Hero() {
  const [currentFeature, setCurrentFeature] = useState(0)
  
  const features = [
    'Vytvor si vlastnú aerolinku',
    'Kupuj a spravuj lietadlá',
    'Najímaj pilotov a stewardov',
    'Plánuj lety po celom svete',
    'Rozhoduj o službách na palube'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [features.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-primary-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-medium to-primary-dark opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="flex items-center space-x-2 mb-6">
              <Plane className="h-12 w-12 text-accent-yellow" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Airline Manager
              </h1>
            </div>
            
            <p className="text-xl text-primary-light mb-8 leading-relaxed">
              Staň sa najúspešnejším leteckým magnátom! Vytvor si vlastnú aerolinku, 
              kupuj lietadlá, najímaj pilotov a stewardov, plánuj lety po celom svete.
            </p>

            <div className="mb-8 h-16 flex items-center">
              <div className="text-2xl font-semibold text-accent-yellow transition-all duration-500">
                {features[currentFeature]}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-yellow">4.8</div>
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent-yellow fill-current" />
                  ))}
                </div>
                <div className="text-sm text-primary-light">Hodnotenie</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-yellow">1M+</div>
                <div className="text-sm text-primary-light">Stiahnutí</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-yellow">50K+</div>
                <div className="text-sm text-primary-light">Aktívnych hráčov</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent-yellow text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent-yellow/90 transition-colors flex items-center justify-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Stiahnuť hru</span>
              </button>
              <button className="border-2 border-primary-light text-primary-light px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-light hover:text-primary-dark transition-colors flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Pozrieť trailer</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary-medium to-primary-dark rounded-2xl p-8 shadow-2xl">
              <div className="bg-black rounded-3xl p-2 mx-auto max-w-xs">
                <div className="bg-primary-light rounded-2xl p-4 h-96 flex items-center justify-center">
                  <div className="text-center text-primary-dark">
                    <Plane className="h-16 w-16 mx-auto mb-4 text-accent-yellow" />
                    <p className="text-lg font-semibold">Screenshot z hry</p>
                    <p className="text-sm opacity-75">Príde v ďalšom kroku</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-accent-yellow text-primary-dark px-4 py-2 rounded-full text-sm font-semibold">
                Nová hra!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent-red text-white px-4 py-2 rounded-full text-sm font-semibold">
                Zľava -50%
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-light rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-light rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}