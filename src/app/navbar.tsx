import Link from "next/link";

export default function Nav() {
  return <nav className="sticky top-0 w-full grid grid-cols-2 grid-rows-1 px-4 py-2 justify-between align-middle bg-black/50 backdrop-blur-md">
    <div className="w-100 flex justify-self-center items-center">
      <p className="py-1 font-mono">To strive for the better is to be humane</p>
    </div>
    <div className="w-100 flex flex-row justify-center items-center gap-4">
      <Link className="px-2 py-1 hover:text-sky-500 hover:underline transition duration-150" href={'/'}>Home</Link>
      <Link className="px-2 py-1 hover:text-sky-500 hover:underline transition duration-150" href={'/about'}>About me</Link>
      <Link className="rounded-xl bg-yellow-400 text-gray-700 hover:bg-yellow-300 active:text-gray-100 active:bg-yellow-500 duration-150 transition-all text-lg font-semibold px-5 py-1" href={'/contact'}>Contact</Link>
    </div>
  </nav>
}
