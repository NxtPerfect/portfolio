import React from 'react'

export default function Timeline() {
  const timePoints = [
    {
      year: "2020",
      description: "Learnt basics of C++, HTML and CSS, got accepted to university."
    },
    {
      year: "2021",
      description: "Learnt basics of JavaScript and TypeScript, started experimenting with React and Python."
    },
    {
      year: "2022",
      description: "Learnt basics of Python, started using github and git."
    },
    {
      year: "2023",
      description: "Learnt Java on Android, created first React app with TypeScript, SCSS, Express, experimented with GO and Rust."
    },
    {
      year: "2024",
      description: "Experimented with Elixir, C and PHP, learnt basics of OpenGL created first Data Science project."
    },
    {
      year: "2025",
      description: "Finished college, focused on understanding React, used Nextjs and tailwind."
    },
    {
      year: "????",
      description: "Expertise in React, TypeScript and Tailwind, get basic understanding of other frontend frameworks"
    },
  ]
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col w-full">
        {timePoints.map((point, index) => {
          return (
            <div key={index} className="group/point flex flex-col w-full">
              <div className="flex flex-row w-full">
                <div className="flex flex-col w-1/12 items-center">
                  <div className="w-2 h-1/2 bg-accent self-center group-first/point:invisible group-last/point:bg-primary"></div>
                  <div className="rounded-[100%] w-12 aspect-square bg-accent group-last/point:bg-primary"></div>
                  <div className="w-2 h-1/2 bg-accent self-center group-last/point:bg-primary"></div>
                </div>
                <div className="flex flex-row items-center w-full border-b-4 border-b-primary">
                  <h3 className="text-year w-3/12 h-fit align-middle">{point.year}</h3>
                  <p className="text-p ml-6 w-full leading-tight">{point.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

