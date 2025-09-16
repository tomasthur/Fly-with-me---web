'use client'

import { useState } from 'react'
import { Menu, X, Plane } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Domov', href: '#home' },
    { name: 'Funkcie', href: '#features' },
    { name: 'Screenshoty', href: '#screenshots' },
    { name: 'Stiahnuť', href: '#download' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-primary-dark/95 backdrop-blur-sm border-b border-primary-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-accent-yellow" />
            <span className="text-xl font-bold text-white">Airline Manager</span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary-light hover:text-accent-yellow transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-light hover:text-accent-yellow focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary-dark/98 backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-primary-light hover:text-accent-yellow block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}