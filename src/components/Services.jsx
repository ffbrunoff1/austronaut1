import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Star, Globe, Rocket, Moon, Orbit, Calendar, BookOpen, Camera, Navigation } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Telescope,
      title: "Observação Guiada",
      description: "Sessões de observação do céu noturno com telescópios profissionais. Descubra planetas, estrelas e galáxias distantes com orientação especializada.",
      features: ["Telescópios de alta qualidade", "Guias especializados", "Mapas estelares detalhados", "Identificação de constelações"],
      highlight: "Popular"
    },
    {
      icon: BookOpen,
      title: "Cursos de Astronomia",
      description: "Aprenda sobre astronomia desde o básico até níveis avançados. Cursos teóricos e práticos para todos os níveis de conhecimento.",
      features: ["Aulas teóricas e práticas", "Material didático completo", "Certificação reconhecida", "Grupos pequenos"],
      highlight: ""
    },
    {
      icon: Calendar,
      title: "Eventos Astronômicos",
      description: "Participe de eventos especiais como eclipses, chuvas de meteoros e alinhamentos planetários com nossa comunidade.",
      features: ["Eclipses solares e lunares", "Chuvas de meteoros", "Alinhamentos planetários", "Observação em grupo"],
      highlight: "Exclusivo"
    },
    {
      icon: Camera,
      title: "Astrofotografia",
      description: "Workshops de astrofotografia para capturar imagens incríveis do cosmos. Aprenda técnicas profissionais de fotografia espacial.",
      features: ["Técnicas profissionais", "Equipamento especializado", "Processamento de imagens", "Portfolio personalizado"],
      highlight: ""
    },
    {
      icon: Globe,
      title: "Planetário Virtual",
      description: "Experiência imersiva com nosso planetário virtual. Viaje pelos planetas e explore galáxias distantes em alta definição.",
      features: ["Realidade virtual", "Viagens interplanetárias", "Exploração de galáxias", "Experiência 360°"],
      highlight: "Novo"
    },
    {
      icon: Navigation,
      title: "Expedições Espaciais",
      description: "Viagens para locais com baixa poluição luminosa para observação profunda do céu. Expedições organizadas para entusiastas.",
      features: ["Locais privilegiados", "Transporte incluído", "Equipamento fornecido", "Guias experientes"],
      highlight: "Premium"
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6"
          >
            <Rocket className="h-8 w-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Experiências <span className="gradient-text">Astronômicas</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma variedade de experiências únicas para explorar o universo. 
            Desde observações guiadas até expedições especiais, há algo para cada tipo de explorador espacial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100 relative overflow-hidden flex flex-col h-full"
            >
              {service.highlight && (
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    service.highlight === 'Popular' ? 'bg-green-100 text-green-800' :
                    service.highlight === 'Exclusivo' ? 'bg-purple-100 text-purple-800' :
                    service.highlight === 'Novo' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {service.highlight}
                  </span>
                </div>
              )}
              
              <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mb-6">
                <service.icon className="h-7 w-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-secondary-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                    <span className="text-sm text-secondary-600">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Saber Mais
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-secondary-900 via-primary-800 to-secondary-900 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Pronto para sua jornada cósmica?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              Junte-se a nós e descubra os mistérios do universo através de experiências únicas e inesquecíveis.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="inline-flex items-center space-x-2 bg-white text-primary-600 font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:shadow-xl"
            >
              <Star className="h-5 w-5" />
              <span>Começar Exploração</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}