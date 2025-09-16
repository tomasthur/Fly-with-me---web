import { Plane, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-primary-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Plane className="h-8 w-8 text-accent-yellow" />
              <span className="text-xl font-bold text-white">Airline Manager</span>
            </div>
            <p className="text-primary-light max-w-md">
              Vytvor si vlastnú aerolinku a staň sa najúspešnejším leteckým magnátom. 
              Kupuj lietadlá, najímaj pilotov, vytváraj lety a riadi svoju leteckú spoločnosť.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-primary-light">
                <Mail className="h-4 w-4" />
                <span>info@airlinemanager.sk</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-light">
                <Globe className="h-4 w-4" />
                <span>www.airlinemanager.sk</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-medium mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-light text-sm">
              © 2025 Fly with me. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-light hover:text-accent-yellow transition-colors text-sm">
                Ochrana údajov
              </a>
              <a href="#" className="text-primary-light hover:text-accent-yellow transition-colors text-sm">
                Podmienky používania
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}