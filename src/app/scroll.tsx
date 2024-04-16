'use client'
import { useEffect, useRef, useState } from 'react'

export default function Scroll() {
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    function onScroll() {
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScroll(((winScroll / height) * 100).toFixed(2));
      let scrollProg = document.getElementById("progress")
    }
    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])
  return (
    <>
      <div className="fixed left-[95%] top-[25svh] h-[50svh] w-1 bg-white/50 overflow-hidden z-50">
        <div id="progress" className="bg-white w-full h-full transition duration-150 ease-in" style={{ transform: `translateY(${scroll - 100}%)` }}></div>
      </div>
      <a href="#top" className="fixed left-[90%] top-[25svh] hover:text-sky-500 transition duration-150">The Best</a>
      <a href="#projects" className="fixed left-[90%] top-[73svh] hover:text-sky-500 transition duration-150">Projects</a>
    </>
  )
}