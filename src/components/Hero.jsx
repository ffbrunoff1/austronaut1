import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Star, Rocket, ArrowDown } from 'lucide-react'

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stars-pattern">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/80 via-secondary-800/70 to-primary-900/80"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-500 rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
              <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/20">
                <Telescope className="h-16 w-16 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Bem-vindo ao
            <span className="block gradient-text">Austronaut</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Embarque em uma jornada fascinante pelos mistérios do cosmos. 
            Explore planetas distantes, constelações brilhantes e descubra os segredos do universo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="btn-primary group"
            >
              <span className="flex items-center space-x-2">
                <Rocket className="h-5 w-5 group-hover:animate-bounce" />
                <span>Iniciar Exploração</span>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="btn-secondary group"
            >
              <span className="flex items-center space-x-2">
                <Star className="h-5 w-5 group-hover:animate-pulse" />
                <span>Descobrir Mais</span>
              </span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
          >
            {[
              { icon: Star, title: "Constelações", desc: "Explore as 88 constelações oficiais" },
              { icon: Telescope, title: "Observação", desc: "Técnicas avançadas de astronomia" },
              { icon: Rocket, title: "Exploração", desc: "Viagens espaciais e descobertas" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.2 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 card-hover"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary-500/20 rounded-full">
                    <feature.icon className="h-8 w-8 text-primary-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={scrollToAbout}
          className="text-white/70 hover:text-white transition-colors"
        >
          <ArrowDown className="h-8 w-8" />
        </motion.button>
      </motion.div>

      <div className="absolute top-20 left-10 animate-float">
        <Star className="h-4 w-4 text-white/30" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Star className="h-3 w-3 text-white/40" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '1s' }}>
        <Star className="h-5 w-5 text-white/20" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '3s' }}>
        <Star className="h-4 w-4 text-white/35" />
      </div>
    </section>
  )
}