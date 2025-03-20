import Link from 'next/link'
import React from 'react'

type Props = {
  href: string
  children: React.ReactNode
}

export default function LinkTo({ href, children }: Props) {
  return (
    <Link href={href} className={`text-link-light dark:text-link-dark
underline decoration-link-light dark:decoration-link-dark
hover:text-link-dark hover:decoration-link-light dark:hover:text-link-light
dark:hover:decoration-link-light focus:text-link-dark focus:decoration-link-dark
dark:focus:text-link-light dark:focus:decoration-link-light`}>
      {children}
    </Link>
  )
}

