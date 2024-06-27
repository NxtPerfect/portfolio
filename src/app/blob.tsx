'use client';
import { useEffect, useRef } from "react";

export default function Blob() {
  // Currently broken
  useEffect(() => {
    function moveBlob(e: any) {
      let blob = document.getElementById("blob")
      // move
      blob?.animate({
        left: `${e.pageX}px`,
        top: `${e.pageY - window.scrollY}px`
      }, {
        duration: 3000, fill: "forwards"
      }
      )
    }
    // requestAnimationFrame(moveBlob)
    document.addEventListener("mousemove", moveBlob)
    return () => {
      document.removeEventListener("mousemove", moveBlob)
    }
  }, [])

  return (
    <div id="blob" className="fixed transition duration-150 bg-yellow-500 w-52 h-52 rounded-full translate-x-[-50%] translate-y-[-50%] blur-2xl mix-blend-difference overflow-hidden">
    </div>
  )
}
