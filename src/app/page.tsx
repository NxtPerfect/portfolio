import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-8xl h-[70svh] flex flex-col justify-center self-center tracking-wide text-pretty max-w-lg leading-none mb-40">Because you deserve <span className="text-sky-500 leading-none font-sans">the best</span></h1>
      <div className="w-100 grid grid-cols-2 gap-28">
        <div className="w-50 max-h-[50svh] flex flex-col aspect-square justify-center items-center border-neutral-800 border-2 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-neutral-500 hover:scale-105 transition duration-300">
          <Image src="/test.jpg" width={500} height={500} quality={50} objectFit="cover" objectPosition="50% 50%" alt="Picture of project1" className="max-w-50 rounded-l" />
          <div className="h-full w-full flex flex-col bg-neutral-950/75 justify-center items-center backdrop-blur-md">
            <div className="w-[30ch] justify-start items-center flex flex-row mb-2 gap-4">
              <h2 className="font-bold text-xl">Project 1</h2>
              <Link className="flex flex-row gap-1 underline text-sky-500 hover:text-sky-400 active:text-sky-600 transition duration-150" href="https://github.com/NxtPerfect">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
                Github</Link>
            </div>
            <p className="font-light max-w-[30ch] line-clamp-5">Description of this project is very complex and it's so complex that in fact it kind of overflow but that's why there are these symbols to keep this from overflowing you know what i'm saying gang gang</p>
          </div>
        </div>
        <div className="w-50 max-h-[50svh] flex flex-col aspect-square justify-center items-center border-neutral-800 border-2 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-neutral-500 hover:scale-105 transition duration-300">
          <Image src="/test.jpg" width={500} height={500} quality={50} objectFit="cover" objectPosition="50% 50%" alt="Picture of project1" className="max-w-50 rounded-l" />
          <div className="h-full w-full flex flex-col bg-neutral-950/75 justify-center items-center backdrop-blur-md">
            <div className="w-[30ch] justify-start items-center flex flex-row mb-2 gap-4">
              <h2 className="font-bold text-xl">Project 2</h2>
              <Link className="flex flex-row gap-1 underline text-sky-500 hover:text-sky-400 active:text-sky-600 transition duration-150" href="https://github.com/NxtPerfect">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                </svg>
                Github</Link>
            </div>
            <p className="font-light max-w-[30ch] line-clamp-5">Description of this project is very complex and it's so complex that in fact it kind of overflow but that's why there are these symbols to keep this from overflowing you know what i'm saying gang gang</p>
          </div>
        </div>
      </div>
    </>
  );
}
