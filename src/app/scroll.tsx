'use client'
import { useEffect, useRef, useState } from 'react'

export default function Scroll() {
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    function onScroll() {
      let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScroll(((winScroll / height) * 100).toFixed(2));
    }
    let projectLink = document.querySelector("#project-link")
    projectLink.style.top = (document.querySelector('#projects').getBoundingClientRect().top / document.querySelector("footer").getBoundingClientRect().bottom) * 50.0 + 25.0 + "svh" // Return from 25 to 75 svh

    let resumeLink = document.querySelector("#resume-link")
    resumeLink.style.top = (document.querySelector('#resume').getBoundingClientRect().top / document.querySelector("footer").getBoundingClientRect().bottom) * 50.0 + 25.0 + "svh" // Return from 25 to 75 svh

    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <>
      <div className="fixed right-[5%] top-[25svh] h-[50svh] w-1 bg-white/50 overflow-hidden z-50">
        <div id="progress" className="bg-yellow-500 w-full h-full transition duration-150 ease-in" style={{ transform: `translateY(${scroll - 100}%)` }}></div>
      </div>
      <a href="#top" className="fixed right-[6%] top-[25svh] hover:text-sky-500 transition duration-150">Home</a>
      <a id="project-link" href="#projects" className="fixed right-[6%] hover:text-sky-500 transition duration-150">Projects</a>
      <a id="resume-link" href="#resume" className="fixed right-[6%] hover:text-sky-500 transition duration-150">Resume</a>
    </>
  )
}
