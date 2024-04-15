'use client';
import { useEffect, useRef } from "react";

export default function Blob() {

  const cursor = useRef({
    posX: 0,
    posY: 0,
    destX: 0,
    destY: 0
  })

  // Currently broken
  useEffect(() => {
    function moveBlob(e) {
      console.log("Yay")
      let blob = document.getElementById("blob")
      cursor.current.destX = e.clientX
      cursor.current.destY = e.clientY
      // move
      blob.style.transform = `translate3d(${cursor.current.posX - cursor.current.destX}px, ${cursor.current.posY - cursor.current.destY}, 0)`
      cursor.current.posX = e.clientX
      cursor.current.posY = e.clientY
    }
    requestAnimationFrame(moveBlob)
    document.addEventListener("mousemove", moveBlob)
    return () => { }
  }, [])

  return (
    <div id="blob" className="absolute transition duration-150 bg-lime-200 w-5 h-5 rounded-full translate-x-[-50%] translate-y-[-50%]">
    </div>
  )
}
