import Link from "next/link";

export default function Footer() {
  return <footer className="flex flex-row w-full min-h-24 justify-center items-center bg-neutral-700">
    <Link className="px-2 py-1 hover:text-sky-500 hover:underline transition duration-150" href={'/'}>Home</Link>
    <Link className="px-2 py-1 hover:text-sky-500 hover:underline transition duration-150" href={'/about'}>About me</Link>
    <Link className="px-2 py-1 hover:text-sky-500 hover:underline transition duration-150" href={'/contact'}>Contact</Link>
    <span>Created using Nextjs, tailwind, supabase.</span>
  </footer>
}
