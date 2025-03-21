import React from 'react'
import LinkTo from './LinkTo'
import Image from 'next/image'

type Props = {
  name: string
  description: string
  imageUrl: string
}

export default function Project({ name, description, imageUrl }: Props) {
  return (
    <div className={`flex flex-col text-left h-[18lh] w-[40ch]`}>
      <div className="h-3/5 w-full overflow-clip">
        <Image src={imageUrl} alt="Project preview" width={400} height={400} />
      </div>
      <div className={`px-4 py-2 bg-background dark:bg-primary text-primary
dark:text-background w-full h-2/5 overflow-ellipsis`}>
        <p className="text-p">
          <LinkTo href={`https://github.com/NxtPerfect/{name}`}>
            {name}
          </LinkTo>
        </p>
        <p className="text-pretty text-small-p overflow-ellipsis">
          {description}
        </p>
      </div>
    </div>
  )
}

