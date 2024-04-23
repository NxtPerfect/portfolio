"use client";
import React from 'react'
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export default function Reveal({ children, width = "fit-content" }: Props) {
  return (
    <>
      <motion.div initial={{ opacity: 0, y: -800 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.2, delay: 0.2, type: "spring", stiffness: 150, dampening: 15 }} style={{ position: "relative", width, overflow: "hidden" }}>{children}</motion.div>
    </>
  )
}
