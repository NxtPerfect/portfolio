import React from 'react'

type Props = {
  children: React.ReactNode
}

export default function CTAButton({ children }: Props) {
  function scrollToElement() {
    const contact = document.getElementById("contact");
    contact?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <button type="button"
      className={`italic bg-primary border-1 border-background w-fit
p-1 px-16 text-h2 mt-28 cursor-pointer text-center align-middle
hover:bg-accent/50 focus:bg-accent/50 text-background`}
      onClick={scrollToElement}>
      {children}
    </button>
  )
}

