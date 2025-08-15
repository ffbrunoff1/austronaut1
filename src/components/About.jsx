import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Star, Globe, Rocket, Moon, Sun, Orbit } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Telescope,
      title: "Observação Avançada",
      description: "Técnicas modernas de observação astronômica com equipamentos de última geração para explorar o cosmos."
    },
    {
      icon: Star,
      title: "Mapeamento Estelar",
      description: "Catálogos completos de estrelas, nebulosas e galáxias com coordenadas precisas e dados científicos."
    },
    {
      icon: Globe,
      title: "Planetas e Exoplanetas",
      description: "Estudo detalhado dos planetas do sistema solar e descoberta de mundos além do nosso sistema."
    },
    {
      icon: Rocket,
      title: "Exploração Espacial",
      description: "Acompanhe as missões espaciais mais importantes e as descobertas que estão revolucionando a ciência."
    },
    {
      icon: Moon,
      title: "Fases Lunares",
      description: "Calendário lunar completo com fases, eclipses e eventos astronômicos relacionados à nossa lua."
    },
    {
      icon: Orbit,
      title: "Mecânica Celeste",
      description: "Compreenda os movimentos dos corpos celestes e as leis físicas que governam o universo."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-gray-50 to-primary-50">
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
            <Sun className="h-8 w-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Sobre o <span className="gradient-text">Austronaut</span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Somos apaixonados pela astronomia e dedicados a compartilhar o conhecimento sobre o universo. 
            Nossa missão é tornar a ciência espacial acessível e fascinante para todos os exploradores do cosmos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-gray-100"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl mb-6">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-secondary-600 leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondary-900 via-primary-800 to-secondary-900 rounded-3xl p-8 md:p-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              "O cosmos é tudo o que é, ou foi, ou será. Nossas contemplações do cosmos nos agitam."
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              Carl Sagan
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              {[
                { number: "100+", label: "Objetos Celestes Catalogados" },
                { number: "50+", label: "Eventos Astronômicos Anuais" },
                { number: "365", label: "Dias de Observação do Céu" }
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}