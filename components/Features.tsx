"use client";

import { motion } from "framer-motion";
import { Camera, Database, Brain, Zap, Shield, TrendingUp } from "lucide-react";
import { LandingConfig } from "@/config/landing.config";

interface FeaturesProps {
  config: LandingConfig["features"];
}

const iconMap: { [key: string]: any } = {
  Camera,
  Database,
  Brain,
  Zap,
  Shield,
  TrendingUp,
};

export default function Features({ config }: FeaturesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            {config.title}
          </h2>
          {config.subtitle && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {config.subtitle}
            </p>
          )}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {config.items.map((feature, index) => {
            const IconComponent = feature.icon ? iconMap[feature.icon] : Camera;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-xl border border-gray-200 card-shadow hover:card-shadow-hover transition-all duration-200 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 bg-primary-600 rounded-xl group-hover:bg-primary-700 transition-colors duration-200">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
