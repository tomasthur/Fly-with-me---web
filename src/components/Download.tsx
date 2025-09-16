import { 
  Download, 
  Smartphone, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Apple,
  QrCode
} from 'lucide-react'

export default function Download() {
  const features = [
    'Bezplatné stiahnutie',
    'Bez reklám',
    'Offline hranie',
    'Pravidelné aktualizácie',
    'Podpora pre Android a iOS',
    'Cloudové ukladanie'
  ]

  const systemRequirements = [
    { platform: 'Android', version: '5.0+', storage: '100 MB' },
    { platform: 'iOS', version: '12.0+', storage: '100 MB' }
  ]

  return (
    <section id="download" className="py-20 bg-gradient-to-b from-primary-medium to-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stiahnuť hru
          </h2>
          <p className="text-xl text-primary-light max-w-3xl mx-auto">
            Začni svoju cestu k úspechu už dnes! 
            Stiahni si Airline Manager a staň sa najlepším leteckým magnátom.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-primary-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-primary-light/20 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Smartphone className="h-12 w-12 text-accent-yellow" />
                  <h3 className="text-3xl font-bold text-white">Airline Manager</h3>
                </div>
                
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-accent-yellow fill-current" />
                  ))}
                  <span className="text-white ml-2 text-lg font-semibold">4.8/5</span>
                </div>

                <p className="text-primary-light text-lg mb-8">
                  Stiahni si hru zadarmo a začni budovať svoju leteckú ríšu!
                </p>

                <div className="space-y-4">
                  <button className="w-full bg-accent-yellow hover:bg-accent-yellow/90 text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-3">
                    <Download className="h-8 w-8" />
                    <div className="text-left">
                      <div className="text-sm">Stiahnuť z</div>
                      <div className="text-lg font-bold">Google Play</div>
                    </div>
                  </button>
                  
                  <button className="w-full bg-white hover:bg-gray-100 text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-3">
                    <Apple className="h-8 w-8" />
                    <div className="text-left">
                      <div className="text-sm">Stiahnuť z</div>
                      <div className="text-lg font-bold">App Store</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-yellow flex-shrink-0" />
                  <span className="text-primary-light">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 text-center">
              <QrCode className="h-32 w-32 mx-auto mb-4 text-primary-dark" />
              <h4 className="text-xl font-bold text-primary-dark mb-2">
                Naskenuj QR kód
              </h4>
              <p className="text-primary-dark/75">
                Rýchle stiahnutie na vaše zariadenie
              </p>
            </div>

            <div className="bg-primary-medium/30 backdrop-blur-sm rounded-2xl p-6 border border-primary-light/20">
              <h4 className="text-xl font-bold text-white mb-4">
                Systémové požiadavky
              </h4>
              <div className="space-y-4">
                {systemRequirements.map((req, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <div className="text-white font-semibold">{req.platform}</div>
                      <div className="text-primary-light text-sm">Verzia {req.version}</div>
                    </div>
                    <div className="text-accent-yellow font-semibold">
                      {req.storage}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent-red/10 border border-accent-red/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">
                🎉 Obmedzená ponuka!
              </h4>
              <p className="text-primary-light">
                Stiahni si hru do konca mesiaca a získaj bonusové lietadlo a 1000 mincí zadarmo!
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent-yellow/20 to-accent-red/20 backdrop-blur-sm rounded-2xl p-8 border border-accent-yellow/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pripravený začať svoju leteckú kariéru?
            </h3>
            <p className="text-primary-light text-lg mb-6">
              Pripoj sa k miliónom hráčov po celom svete a staň sa najúspešnejším leteckým magnátom!
            </p>
            <button className="bg-gradient-to-r from-accent-yellow to-accent-red hover:from-accent-yellow/90 hover:to-accent-red/90 text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2 mx-auto">
              <Download className="h-5 w-5" />
              <span>Stiahnuť teraz</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}