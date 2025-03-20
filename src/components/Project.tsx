import React from 'react'
import LinkTo from './LinkTo'

type Props = {
  name: string
  description: string
}

export default function Project({ name, description }: Props) {
  return (
    <div className={`flex flex-col text-left min-h-16 w-[20ch]`}>
      <div className={`p-2 bg-background dark:bg-primary text-primary
dark:text-background w-[20ch] h-[4lh] overflow-ellipsis`}>
        <p className="text-[1.5rem]">
          <LinkTo href={`https://github.com/NxtPerfect/{name}`}>
            {name}
          </LinkTo>
        </p>
        <p className="text-pretty">
          {description}
        </p>
      </div>
    </div>
  )
}

