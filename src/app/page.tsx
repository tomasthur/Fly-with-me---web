'use client'

import { useState, useEffect } from 'react'
 
function ScreenshotsCarousel() {
  const screenshots = [
    { src: '/images/Screenshot_2025-09-05-11-57-53-429_com.tomasthur.flywithme-portrait.png', title: 'Flight Overview' },
    { src: '/images/Screenshot_2025-09-05-11-58-31-548_com.tomasthur.flywithme-portrait.png', title: 'Markets and Trading' },
    { src: '/images/Screenshot_2025-09-05-11-58-40-643_com.tomasthur.flywithme-left.png', title: 'Aircraft Auctions' },
    { src: '/images/Screenshot_2025-09-05-11-59-08-883_com.tomasthur.flywithme-portrait.png', title: 'Statistics and Analytics' },
    { src: '/images/Screenshot_2025-09-05-12-00-08-710_com.tomasthur.flywithme-portrait.png', title: 'Game Settings' },
    { src: '/images/Screenshot_2025-09-05-12-00-24-510_com.tomasthur.flywithme-left.png', title: 'Profile and Achievements' },
  ]
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = (i: number) => {
    if (i < 0) i = screenshots.length - 1
    if (i >= screenshots.length) i = 0
    setIndex(i)
  }

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % screenshots.length), 4000)
    return () => clearInterval(id)
  }, [paused, screenshots.length])

  return (
    <div className="w-full flex flex-col items-center" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative w-full max-w-[220px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[300px]">
        <div className="relative aspect-[9/16] overflow-hidden rounded-2xl">
          {screenshots.map((shot, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-500 ${i === index ? 'opacity-100' : 'opacity-0'}`}
              aria-hidden={i !== index}
            >
              <Image src={shot.src} alt={shot.title} fill className="object-cover select-none" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {screenshots.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to screenshot ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-accent-yellow' : 'w-2.5 bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-dark overflow-x-hidden relative z-20">
      {/* Global Background Game Logo (persists while scrolling) */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="relative w-[28rem] h-[28rem] opacity-5 animate-slow-pulse select-none mix-blend-overlay">
          <Image
            src="/images/icon.png"
            alt="Fly with me background logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-primary-dark/20 backdrop-blur-md border-b border-primary-light/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl overflow-hidden shadow-lg animate-pulse-glow">
                <Image
                  src="/images/icon.png"
                  alt="Airline Manager Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-white">Fly with me</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-white/90 hover:text-accent-yellow transition-colors font-medium">Home</a>
              <a href="#features" className="text-white/90 hover:text-accent-yellow transition-colors font-medium">Features</a>
              <a href="#screenshots" className="text-white/90 hover:text-accent-yellow transition-colors font-medium">Screenshots</a>
              <a href="#download" className="text-white/90 hover:text-accent-yellow transition-colors font-medium">Download</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className="text-white/90 hover:text-accent-yellow transition-colors"
              >
                {isMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Desktop CTA Button */}
            <button className="hidden lg:block bg-accent-yellow text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-yellow/90 transition-colors">
              Download
            </button>
          </div>
        </div>

        {/* Mobile Menu (animated open/close) */}
        <div className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} id="mobile-menu" aria-hidden={!isMenuOpen}>
          <div className={`px-4 ${isMenuOpen ? 'pt-2 pb-3' : 'pt-0 pb-0'} space-y-1 bg-primary-dark/30 backdrop-blur-md border-t border-primary-light/10 transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-2'}`}>
            <a
              href="#home"
              className="text-white/90 hover:text-accent-yellow block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className="text-white/90 hover:text-accent-yellow block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#screenshots"
              className="text-white/90 hover:text-accent-yellow block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Screenshots
            </a>
            <a
              href="#download"
              className="text-white/90 hover:text-accent-yellow block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 transform"
              onClick={() => setIsMenuOpen(false)}
            >
              Download
            </a>
            <div className="pt-4">
              <button className="w-full bg-accent-yellow text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-yellow/90 transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-dark relative overflow-hidden flex items-center py-20 scroll-mt-24">
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-accent-red rounded-full animate-bounce"></div>
          <div className="absolute top-60 left-1/4 w-1 h-1 bg-primary-light rounded-full animate-ping"></div>
          <div className="absolute top-80 right-1/3 w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent-red rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-10 w-1 h-1 bg-primary-light rounded-full animate-ping"></div>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-yellow/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-accent-red/20 rounded-full blur-xl animate-pulse"></div>


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[80vh]">
            <div className="text-white text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-balance max-w-4xl mx-auto lg:mx-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4 lg:mb-6 animate-fade-in">
                <span className="block text-accent-yellow animate-pulse bg-gradient-to-r from-accent-yellow to-accent-red bg-clip-text text-transparent">Every flight tells a story.</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-primary-light mb-4 sm:mb-6 lg:mb-8 leading-relaxed px-4 sm:px-0">
                Manage your aviation company, buy aircraft, hire pilots and stewards,
                create new flights and decide on onboard services. Become the best
                airline manager!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4 sm:px-0">
                <button className="bg-accent-yellow text-primary-dark px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-accent-yellow/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-yellow/50 animate-pulse">
                  Download
                </button>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 flex justify-center">
              <div className="relative z-10">
                <div className="transform skew-y-3 hover:skew-y-0 transition-all duration-500 hover:shadow-3xl hover:shadow-accent-yellow/30 animate-float max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] mx-auto">
                  <Image
                    src="/images/Screenshot_2025-09-05-11-57-05-573_com.tomasthur.flywithme-left.png"
                    alt="Main menu of Fly with me game"
                    width={300}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-accent-yellow rounded-full opacity-20 animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-accent-red rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white relative overflow-hidden scroll-mt-24">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-4 h-4 bg-accent-yellow rounded-full animate-bounce"></div>
          <div className="absolute top-20 right-20 w-2 h-2 bg-accent-red rounded-full animate-ping"></div>
          <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-primary-light rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-2 h-2 bg-accent-yellow rounded-full animate-bounce"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why choose Fly with me?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the ultimate airline management simulation with realistic gameplay,
              strategic decision-making, and endless possibilities to build your aviation empire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: '✈️',
                title: 'Build the Airline of Your Dreams',
                desc:
                  'Buy sleek new aircraft, sell aging machines, and shape a fleet that reflects your vision. Every deal brings you closer to becoming an aviation giant.',
              },
              {
                emoji: '🏷️',
                title: 'Name Your Own Airline',
                desc:
                  'Your company, your brand. Choose a name that will echo across the skies and leave your mark on aviation.',
              },
              {
                emoji: '👨‍✈️',
                title: 'Command Your Crew',
                desc:
                  'From rookie copilots to elite captains, decide who takes off and who gets grounded. The right team makes every flight.',
              },
              {
                emoji: '💶',
                title: 'Fuel Growth with Bank Loans',
                desc:
                  'Need a boost? Secure loans up to €1,000,000 to outpace the competition—but every takeoff comes with repayments.',
              },
              {
                emoji: '🔨',
                title: 'Win High‑Stakes Aviation Auctions',
                desc:
                  'Fly championship teams or escort world leaders. Win the contract, deliver on time, earn prestige—or face penalties.',
              },
              {
                emoji: '🌍',
                title: 'Unlock Airports Worldwide',
                desc:
                  'Partner with major hubs and regional strips. Big airports accept all aircraft at higher fees; smaller ones are cheaper but limited.',
              },
              {
                emoji: '🍷',
                title: 'Craft the Passenger Experience',
                desc:
                  'Meals, drinks, and service checks—define the comfort level. Satisfaction drives reviews, ratings, and ticket sales.',
              },
              {
                emoji: '📡',
                title: 'Master the Skies',
                desc:
                  'Monitor your fleet on live radar, assign safe altitudes, and prevent mid‑air incidents. One mistake can ground your reputation.',
              },
            ].map((f, i) => (
              <div key={i} className="bg-white/95 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-accent-yellow/50 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary-light/30 flex items-center justify-center mb-5 text-2xl">
                  <span>{f.emoji}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Device Management Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Compete in Global Multiplayer
              </h2>
              <div className="rounded-2xl p-6 bg-gradient-to-br from-primary-light/30 to-accent-yellow/20 border border-primary-light/40">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">🏆</div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Monthly Fly With Me T‑Shirt Challenge</h3>
                    <p className="text-gray-800 leading-relaxed">
                      You’re not alone in the skies. Every month, airlines compete for the top spot. The carrier with the most
                      completed flights earns glory — and the most active player wins an exclusive <span className="font-semibold">Fly With Me</span> t‑shirt
                      delivered straight to their doorstep. Will it be you?
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white/80 rounded-xl p-4 border border-primary-light/30">
                    <div className="text-sm text-gray-500">Objective</div>
                    <div className="font-semibold text-gray-900">Most completed flights</div>
                  </div>
                  <div className="bg-white/80 rounded-xl p-4 border border-primary-light/30">
                    <div className="text-sm text-gray-500">Prize</div>
                    <div className="font-semibold text-gray-900">Exclusive FWM T‑shirt</div>
                  </div>
                  <div className="bg-white/80 rounded-xl p-4 border border-primary-light/30">
                    <div className="text-sm text-gray-500">Cycle</div>
                    <div className="font-semibold text-gray-900">Resets every month</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2"></div>
                  <p className="text-gray-700">Live radar to monitor your fleet in real time.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2"></div>
                  <p className="text-gray-700">Hire and manage crew to keep flights on schedule.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-yellow rounded-full mt-2"></div>
                  <p className="text-gray-700">Expand your network by unlocking airports around the world.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="flex justify-center">
                <Image
                  src="/images/Screenshot_2025-09-05-14-48-55-650_host.exp.exponent-left.png"
                  alt="Monthly competition and multiplayer overview"
                  width={360}
                  height={720}
                  className="w-full h-auto max-w-[360px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[560px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Share your achievements with friends easily
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl lg:max-w-none mx-auto lg:mx-0">
                Experience the ultimate airline management simulation with realistic gameplay,
                strategic decision-making, and endless possibilities to build your aviation empire.
              </p>
            </div>
            <div className="flex justify-center order-2 lg:order-1">
              <ScreenshotsCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-primary-dark via-primary-medium to-primary-dark relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">
                Start managing your airline faster
              </h2>
              <p className="text-xl text-primary-light mb-8 leading-relaxed">
                Experience the ultimate airline management simulation with realistic gameplay,
                strategic decision-making, and endless possibilities to build your aviation empire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-accent-yellow text-primary-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-yellow/90 transition-colors flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span>Google Play</span>
                </button>
                <button className="bg-accent-yellow text-primary-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-yellow/90 transition-colors flex items-center justify-center space-x-3">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <span>App Store</span>
                </button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <Image
                src="/images/Screenshot_2025-09-05-11-58-55-879_com.tomasthur.flywithme-left.png"
                alt="Download preview"
                width={320}
                height={640}
                className="w-full h-auto max-w-[260px] sm:max-w-[300px] md:max-w-[320px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 justify-items-center text-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="h-10 w-10 rounded-xl overflow-hidden">
                  <Image
                    src="/images/icon.png"
                    alt="Fly with me Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-2xl font-bold">Fly with me</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                The mobile game for airline management. Create your own aviation company
                and become the best manager in the industry.
              </p>
              <div className="flex justify-center items-center space-x-2 text-sm text-gray-400">
                <span>Created by:</span>
                <div className="h-6 w-6 rounded overflow-hidden">
                  <Image
                    src="/images/logoTT.png"
                    alt="TT Logo"
                    width={24}
                    height={24}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Fly with me. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}