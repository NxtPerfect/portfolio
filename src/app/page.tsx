import Image from "next/image";
import Link from "next/link";
import Blob from "./blob";
import Scroll from "./scroll";
import { useState } from "react";

type Project = {
  id: number,
  name: string,
  description: string,
  link: string,
  technologies: Array<string>,
  image: string
}

export default function Home() {
  let id = 0
  const vocab_master: Project = { id: id++, name: 'Vocab-Master', description: 'Platform to learn foreign language vocabulary. Uses flashcards and daily streak to enhance learning process.', link: 'https://github.com/NxtPerfect/Vocab-Master', technologies: ['React', 'Express', 'MySQL', 'SCSS'], image: '/test.jpg' }
  const goth_todo: Project = { id: id++, name: 'Goth-Todo', description: 'Simple todo app.', link: 'https://github.com/NxtPerfect/Goth-Todo', technologies: ['Golang', 'Templ', 'HTMX', 'Tailwind'], image: "/test.jpg" }
  const portfolio: Project = { id: id++, name: 'Portfolio', description: 'Portfolio website showing off my work and skills as frontend web developer.', link: 'https://github.com/NxtPerfect/Portfolio', technologies: ['Nextjs', 'Tailwind'], image: "/test.jpg" }
  const projects: Array<Project> = [vocab_master, goth_todo, portfolio]


  return (
    <>
      <Blob />
      <Scroll />
      <div className="absolute h-full w-full z-[-1] overflow-hidden">
      </div>
      <h1 className="text-8xl h-[70svh] flex flex-col justify-center self-center tracking-wide text-pretty max-w-lg leading-none mb-40">Because you deserve <span className="text-sky-500 leading-none font-san">the best</span></h1>
      <div className="h-1 w-[100svw] bg-sky-500 my-10"></div>
      <h2 id="projects" className="text-4xl mb-10 justify-start w-[50svw]">Projects</h2>
      <div className="w-100 grid grid-cols-2 gap-28 motion-safe:animate-move-bottom">
        {projects.map((project: Project) => {
          return (
            <div className="w-50 max-h-[50svh] flex flex-col aspect-square justify-center items-center border-neutral-800 border-2 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-neutral-500 hover:scale-105 transition duration-300 motion-reduce:transition-none" key={project.id}>
              <Image src={project.image} width={500} height={500} quality={50} alt="Picture of project1" className="object-cover max-w-50" />
              <div className="h-full w-full flex flex-col bg-neutral-950/75 justify-center items-center backdrop-blur-md">
                <div className="w-[30ch] justify-start items-center flex flex-row mb-1 gap-4">
                  <h2 className="font-bold text-xl">{project.name}</h2>
                  <Link className="flex flex-row gap-1 underline text-sky-500 hover:text-sky-400 active:text-sky-600 transition duration-150 motion-reduce:transition-none" href={project.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                    Github</Link>
                </div>
                <div className="font-extralight text-sm mb-2 w-[30ch]">Technologies used: {project.technologies.map((tech: string) => { return tech }).join(', ')}.</div>
                <p className="font-light w-[30ch] line-clamp-5">{project.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  );
}
