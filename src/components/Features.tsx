import { 
  Plane, 
  Users, 
  MapPin, 
  Utensils, 
  DollarSign, 
  TrendingUp,
  Settings,
  Globe,
  Clock,
  Award
} from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Plane,
      title: 'Spravuj lietadlá',
      description: 'Kupuj nové lietadlá, modernizuj existujúce a optimalizuj svoju flotilu pre maximálny zisk.',
      color: 'text-accent-yellow'
    },
    {
      icon: Users,
      title: 'Najímaj personál',
      description: 'Najímaj a prepúšťaj pilotov, stewardov a iný personál. Spravuj ich platy a spokojnosť.',
      color: 'text-accent-red'
    },
    {
      icon: MapPin,
      title: 'Plánuj lety',
      description: 'Vytváraj nové lety medzi letiskami po celom svete a optimalizuj svoje trasy.',
      color: 'text-primary-light'
    },
    {
      icon: Utensils,
      title: 'Služby na palube',
      description: 'Rozhoduj o tom, či sa bude na palube podávať jedlo a napoje. Zvyšuj spokojnosť pasažierov.',
      color: 'text-accent-yellow'
    },
    {
      icon: DollarSign,
      title: 'Finančné riadenie',
      description: 'Sleduj príjmy a výdavky, investuj do rozvoja a buduj svoju leteckú ríšu.',
      color: 'text-accent-red'
    },
    {
      icon: TrendingUp,
      title: 'Analytika a štatistiky',
      description: 'Sleduj výkonnosť svojej aerolinky pomocí detailných štatistík a analýz.',
      color: 'text-primary-light'
    },
    {
      icon: Settings,
      title: 'Prispôsobenie',
      description: 'Prispôsob si hru podľa svojich preferencií a vytvor jedinečnú leteckú spoločnosť.',
      color: 'text-accent-yellow'
    },
    {
      icon: Globe,
      title: 'Svetové trhy',
      description: 'Rozširuj sa do nových krajín a kontinentov. Dobývaj svetové letecké trhy.',
      color: 'text-accent-red'
    },
    {
      icon: Clock,
      title: 'Real-time hranie',
      description: 'Hraj v reálnom čase alebo nastav rýchlosť hry podľa svojich potrieb.',
      color: 'text-primary-light'
    },
    {
      icon: Award,
      title: 'Úspechy a ocenenia',
      description: 'Získavaj úspechy, dosahuj milníky a staň sa najlepším leteckým magnátom.',
      color: 'text-accent-yellow'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-primary-dark to-primary-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Funkcie hry
          </h2>
          <p className="text-xl text-primary-light max-w-3xl mx-auto">
            Objav všetky možnosti, ktoré ti Airline Manager ponúka. 
            Vytvor si najúspešnejšiu aerolinku na svete!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-primary-medium/50 backdrop-blur-sm rounded-xl p-6 border border-primary-light/20 hover:border-primary-light/40 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary-dark/50 p-3 rounded-lg group-hover:bg-primary-dark/70 transition-colors">
                    <IconComponent className={`h-6 w-6 ${feature.color}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-primary-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-primary-medium/30 backdrop-blur-sm rounded-2xl p-8 border border-primary-light/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              A to nie je všetko!
            </h3>
            <p className="text-primary-light text-lg max-w-2xl mx-auto">
              Airline Manager ti ponúka stovky hodín zábavy s neustále sa rozvíjajúcimi funkciami. 
              Pridávame nové lietadlá, letiská a mechaniky hry pravidelne.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}