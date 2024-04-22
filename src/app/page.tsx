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
      <a href="#projects" className="fixed w-10 h-10 z-50">
        <svg className="fixed w-10 h-10 px-2 bottom-[10svh] motion-safe:animate-bounce transition duration-300 bg-black/50 rounded-3xl backdrop-blur-md hover:bg-sky-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
        </svg>
      </a>
      <div className="flex flex-row gap-1">
        <div className="flex flex-col text-7xl font-semibold justify-center align-center px-1 mb-40 mt-2 bg-yellow-500 text-neutral-900"><p>A</p><p>U</p><p>R</p><p>O</p><p>R</p><p>A</p></div>
        <h1 className="text-8xl h-[70svh] flex flex-col justify-center self-center tracking-wide text-pretty max-w-lg leading-none mb-40">Because you deserve <span className="text-sky-500 leading-none font-san">the best</span></h1>
      </div>
      <div className="h-1 w-[100svw] bg-sky-500 my-10"></div>
      <h2 id="projects" className="text-4xl mb-10 justify-start w-[50svw]">Projects</h2>
      <div className="w-100 grid grid-cols-2 gap-28 motion-safe:animate-move-bottom mb-10">
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
      <div className="h-1 w-[100svw] bg-sky-500 my-10"></div>
      <h2 id="resume" className="text-4xl justify-start w-[50svw] mb-10">Resume</h2>
      <div className="flex w-[60svw] flex-col gap-10 justify-items-center align-center z-10">
        <div className="flex flex-col w-[80ch] bg-neutral-800/50 py-4 px-8 rounded-md justify-center justify-items-center self-center">
          <h3 className="text-xl mb-2">Work Experience</h3>
          <div className="h-1 w-full bg-yellow-500 mb-2"></div>
          <div className="flex flex-row gap-10 justify-start align-center">
            <p className="max-w-[80ch]">None really but yk yk yk yk</p>
            <p className="font-thin">2024-2069</p>
          </div>
        </div>
        <div className="flex flex-col w-[80ch] bg-neutral-800/50 py-4 px-8 rounded-md justify-center self-center justify-self-center">
          <h3 className="text-xl mb-2">Education</h3>
          <div className="h-1 w-full bg-yellow-400 mb-2"></div>
          <div className="flex flex-row gap-10 justify-start align-center">
            <p className="max-w-[80ch]">Bachelors of Computer Science at University XYZ</p>
            <p className="font-thin">2021-2025</p>
          </div>
        </div>
        <div className="flex flex-col w-[80ch] bg-neutral-800/50 py-4 px-8 rounded-md justify-center self-center justify-self-center">
          <h3 className="text-xl mb-2">Familiar technologies</h3>
          <div className="h-1 w-full bg-yellow-300 mb-2"></div>
          <div className="flex flex-row gap-10 justify-start align-center">
            <p className="max-w-[80ch]">React, Nextjs, Tailwind, SCSS, Express, MySQL, PostgreSQL, Javascript, Typescript, Python, Pytorch, Tensorflow, Java, C, C++, PHP.</p>
          </div>
        </div>
        <div className="flex flex-col w-[80ch] bg-neutral-800/50 py-4 px-8 rounded-md justify-center self-center justify-self-center">
          <h3 className="text-xl mb-2">Soft skills</h3>
          <div className="h-1 w-full bg-yellow-200 mb-2"></div>
          <div className="flex flex-row gap-10 justify-start align-center">
            <p className="max-w-[80ch]">Valuable communication skills, passionate learner, stress-resistant, laid-back.</p>
          </div>
        </div>
      </div>
      <a href="mailto:mail@tutanota.com" className="mt-20 rounded-xl bg-yellow-400 text-gray-700 hover:bg-yellow-300 active:text-gray-100 active:bg-yellow-500 duration-150 transition-all text-4xl font-semibold px-5 py-1 motion-safe:animate-pulse">Contact me</a>
    </>
  );
}
