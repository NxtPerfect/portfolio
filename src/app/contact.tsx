'use client';
import React from 'react'
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.a id="contact" initial={{ x: -1000 }} whileInView={{ x: 0 }} viewport={{ once: true }} whileTap={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.1, type: "spring", stiffness: 500, damping: 15 }} href="mailto:mail@tutanota.com" className="mt-20 rounded-xl bg-yellow-400 text-gray-700 hover:bg-yellow-300 active:text-gray-100 active:bg-yellow-500 duration-150 transition-all text-4xl font-semibold px-5 py-1">Contact me</motion.a>
  )
}
