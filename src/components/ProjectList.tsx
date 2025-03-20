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
      description: "job search platform without biases",
      imageUrl: ""
    },
    {
      name: "GemUI",
      description: "accessible react components",
      imageUrl: ""
    },
    {
      name: "EasyVim",
      description: "vim motions gamified",
      imageUrl: ""
    }
  ]
  return (
    <div className="flex flex-row justify-center gap-32">
      {projects.map((project, index) => {
        return (
          <Project key={index} {...project} />
        )
      })}
    </div>
  );
}

