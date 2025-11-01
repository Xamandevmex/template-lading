"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Link,
  TrendingDown,
  Sparkles,
  Target,
  Heart,
} from "lucide-react";
import { LandingConfig } from "@/config/landing.config";

interface BenefitsProps {
  config: LandingConfig["benefits"];
}

const iconMap: { [key: string]: any } = {
  Clock,
  Link,
  TrendingDown,
  Sparkles,
  Target,
  Heart,
};

export default function Benefits({ config }: BenefitsProps) {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-50 rounded-full filter blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Benefits List */}
        <div className="space-y-8">
          {config.items.map((benefit, index) => {
            const IconComponent = benefit.icon
              ? iconMap[benefit.icon]
              : Sparkles;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon side */}
                <div className="flex-shrink-0">
                  <div className="bg-primary-600 p-8 rounded-xl card-shadow">
                    <IconComponent className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Content side */}
                <div className="flex-1 bg-white p-8 rounded-xl border border-gray-200 card-shadow">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
