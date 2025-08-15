import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Mail, Phone, MapPin, Star, Rocket, Globe, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Exploração', id: 'services' },
    { name: 'Contato', id: 'contact' },
  ]

  const services = [
    'Observação Guiada',
    'Cursos de Astronomia',
    'Eventos Astronômicos',
    'Astrofotografia',
    'Planetário Virtual',
    'Expedições Espaciais'
  ]

  const contactInfo = [
    { icon: Mail, text: 'contato@austronaut.com' },
    { icon: Phone, text: '+55 (11) 9999-9999' },
    { icon: MapPin, text: 'São Paulo, SP' },
  ]

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-stars-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full">
                <Telescope className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">Austronaut</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Explorando os mistérios do cosmos e compartilhando a paixão pela astronomia. 
              Sua jornada pelo universo começa aqui.
            </p>

            <div className="flex items-center space-x-2 text-primary-300">
              <Star className="h-5 w-5" />
              <span className="text-sm">Conectando pessoas ao cosmos desde 2024</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Rocket className="h-5 w-5 mr-2 text-primary-400" />
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Globe className="h-5 w-5 mr-2 text-primary-400" />
              Experiências
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-primary-300 transition-colors duration-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Mail className="h-5 w-5 mr-2 text-primary-400" />
              Contato
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <item.icon className="h-4 w-4 text-primary-400" />
                  </div>
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="mt-6 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Fale Conosco
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Austronaut. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Criado com</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>por</span>
              <a 
                href="https://papum.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors font-medium italic"
              >
                Papum
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-6 border-t border-gray-800"
        >
          <p className="text-gray-400 text-sm italic">
            "Dois olhares contemplam o mesmo céu: um vê lama, o outro, estrelas." - Oscar Wilde
          </p>
        </motion.div>
      </div>

      <div className="absolute top-10 left-10 animate-float">
        <Star className="h-4 w-4 text-white/20" />
      </div>
      <div className="absolute top-20 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Star className="h-3 w-3 text-white/30" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '1s' }}>
        <Star className="h-5 w-5 text-white/15" />
      </div>
      <div className="absolute bottom-32 right-16 animate-float" style={{ animationDelay: '3s' }}>
        <Star className="h-4 w-4 text-white/25" />
      </div>
    </footer>
  )
}