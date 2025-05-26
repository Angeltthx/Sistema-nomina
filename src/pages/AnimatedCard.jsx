// src/components/AnimatedCard.jsx
import React from 'react'
import { motion } from 'framer-motion'

export default function AnimatedCard({ title, description, onClick }) {
  return (
    <motion.div
      className="card"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}
