"use client";

import { motion } from "framer-motion";
import { Star, Download } from "lucide-react";
import { LandingConfig } from "@/config/landing.config";

interface HeroProps {
  config: LandingConfig["hero"];
  productName: string;
}

export default function Hero({ config, productName }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-50 rounded-full filter blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        {config.badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full card-shadow"
          >
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-medium text-gray-700">
              {config.badge}
            </span>
          </motion.div>
        )}

        {/* Título principal */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
        >
          {config.title}
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-3xl mx-auto"
        >
          {config.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button className="group px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 hover:shadow-lg flex items-center gap-2">
            <Download className="w-5 h-5" />
            {config.cta.primary}
          </button>

          {config.cta.secondary && (
            <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-all duration-200">
              {config.cta.secondary}
            </button>
          )}
        </motion.div>

        {/* Stats */}
        {config.stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 text-center"
          >
            <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl card-shadow">
              <div className="text-3xl font-bold text-primary-600">
                {config.stats.users}
              </div>
              <div className="text-sm text-gray-600">Usuarios activos</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-8 py-4 rounded-2xl card-shadow">
              <div className="text-3xl font-bold text-primary-600 flex items-center gap-1">
                <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                {config.stats.rating}
              </div>
              <div className="text-sm text-gray-600">Calificación</div>
            </div>
          </motion.div>
        )}

        {/* Imagen mockup del producto (placeholder) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 relative"
        >
          <div className="relative mx-auto w-full max-w-4xl">
            <div className="relative bg-white rounded-2xl p-12 card-shadow-hover border border-gray-200">
              {/* Placeholder para imagen del producto */}
              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                <p className="text-gray-400 text-lg">Vista previa de la app</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}
