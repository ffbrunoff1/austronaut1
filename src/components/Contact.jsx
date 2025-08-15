import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Star, Telescope, Clock, Globe } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [status, setStatus] = useState({ message: '', isError: false })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', isError: false })
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    setTimeout(() => {
      setStatus({ message: '', isError: false })
    }, 5000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "contato@austronaut.com",
      description: "Resposta em até 24h"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "+55 (11) 9999-9999",
      description: "Seg a Sex, 9h às 18h"
    },
    {
      icon: MapPin,
      title: "Localização",
      info: "São Paulo, SP",
      description: "Observatório Principal"
    },
    {
      icon: Clock,
      title: "Horários",
      info: "24/7 Online",
      description: "Suporte sempre disponível"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900">
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
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-400 to-accent-500 rounded-full mb-6"
          >
            <Telescope className="h-8 w-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em <span className="bg-gradient-to-r from-primary-300 to-accent-400 bg-clip-text text-transparent">Contato</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tem dúvidas sobre astronomia ou quer participar de nossas expedições? 
            Estamos aqui para ajudá-lo a explorar o universo!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">Informações de Contato</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 card-hover"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-primary-300 font-medium">{item.info}</p>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl border border-primary-400/30"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="h-6 w-6 text-primary-300" />
                  <h4 className="text-lg font-semibold text-white">Comunidade Global</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Faça parte de nossa comunidade de entusiastas da astronomia. 
                  Compartilhe descobertas, participe de eventos e explore o cosmos conosco!
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">Envie sua Mensagem</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                      placeholder="Seu nome"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                      placeholder="seu@email.com"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Assunto
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all"
                  >
                    <option value="" className="bg-secondary-800">Selecione um assunto</option>
                    <option value="observacao" className="bg-secondary-800">Observação Guiada</option>
                    <option value="cursos" className="bg-secondary-800">Cursos de Astronomia</option>
                    <option value="eventos" className="bg-secondary-800">Eventos Astronômicos</option>
                    <option value="astrofotografia" className="bg-secondary-800">Astrofotografia</option>
                    <option value="expedições" className="bg-secondary-800">Expedições Espaciais</option>
                    <option value="outros" className="bg-secondary-800">Outros</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all resize-none"
                    placeholder="Conte-nos sobre seu interesse em astronomia..."
                  ></textarea>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar Mensagem</span>
                </motion.button>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg text-center ${
                      status.isError 
                        ? 'bg-red-500/20 border border-red-500/30 text-red-300' 
                        : 'bg-green-500/20 border border-green-500/30 text-green-300'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Star className="h-5 w-5" />
                      <span>{status.message}</span>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}