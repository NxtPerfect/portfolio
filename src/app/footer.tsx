import Link from "next/link";

export default function Footer() {
  return <footer className="flex flex-row gap-2 w-full min-h-24 justify-center items-center bg-black/50 z-50 absolute backdrop-blur-md">
    <Link className="px-2 py-1 hover:text-sky-500 hover:underline transition duration-150" href={'#top'}>Home</Link>
    <Link className="px-2 py-1 hover:text-sky-500 hover:underline transition duration-150" href={'#projects'}>Projects</Link>
    <Link className="px-2 py-1 hover:text-sky-500 hover:underline transition duration-150" href={'#resume'}>Resume</Link>
    <a href="mailto:aurora.miloasavljevic@tutanota.com" className="px-2 py-1 hover:text-sky-500 hover:underline transition duration-150">Contact me</a>
    <span>Created using Nextjs and Tailwind.</span>
  </footer>
}
