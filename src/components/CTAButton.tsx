"use client";
import React from 'react'

type Props = {
  children: React.ReactNode
  onClickAction: () => void
}

export default function CTAButton({ children, onClickAction }: Props) {
  return (
    <button type="button"
      className={`italic bg-primary border-1 border-background w-fit
p-1 px-16 text-h2 mt-28 cursor-pointer text-center align-middle
hover:bg-accent/50 focus:bg-accent/50`}
      onClick={onClickAction}>
      {children}
    </button>
  )
}

