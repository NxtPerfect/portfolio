import React from 'react'
import Project from './Project';

type ProjectData = {
  name: string
  description: string
  imageUrl: string
}

export default function ProjectList() {
  const projects: Array<ProjectData> = [
    {
      name: "Flaminger",
      description: "job search platform without biases, where you’ll always know reason behind your rejection",
      imageUrl: "/websitePlaceholder.jpg"
    },
    {
      name: "GemUI",
      description: "react component library optimized for maximum accessibility without compromising usability",
      imageUrl: "/websitePlaceholder.jpg"
    },
    {
      name: "EasyVim",
      description: "practice vim motions in gamified environment, earn rewards, defeat bosses and become more powerful",
      imageUrl: "/websitePlaceholder.jpg"
    }
  ]
  return (
    <div className="flex flex-row justify-evenly gap-36">
      {projects.map((project, index) => {
        return (
          <Project key={index} {...project} />
        )
      })}
    </div>
  );
}

