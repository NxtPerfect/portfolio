import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-8xl h-[75svh] flex flex-col justify-center self-center tracking-wide text-pretty max-w-lg leading-none mb-40">Because you deserve <span className="text-sky-500 leading-none underline">the best</span></h1>
      <div className="w-100 grid grid-cols-2 gap-28">
        <div className="w-50 max-h-[50svh] flex flex-col aspect-square justify-center items-center border-neutral-800 border-2 rounded-2xl overflow-hidden">
          <img className="max-w-50 rounded-l" src="/test.jpg"></img>
          <div className="h-full w-full flex flex-col bg-neutral-800 justify-center items-center">
            <h2 className="font-bold text-xl mb-2">Project 1</h2>
            <Link className="underline text-sky-500 hover:text-sky-600 active:text-sky-400 transition duration-150 mb-6" href="https://github.com/NxtPerfect">Github</Link>
            <p className="font-light max-w-[30ch] line-clamp-3">Description of this project is very complex and it's so complex that in fact it kind of overflow but that's why there are these symbols to keep this from overflowing you know what i'm saying gang gang</p>
          </div>
        </div>
        <div className="w-50 max-h-[50svh] flex flex-col aspect-square justify-stretch items-stretch border-neutral-800 border-2 rounded-2xl overflow-hidden">
          <div className="h-100 max-w-50 rounded-l bg-scroll bg-[url('/test.jpg') h-50"></div>
          <div className="h-full w-full flex flex-col bg-neutral-800 justify-center items-center">
            <h2 className="font-bold text-xl mb-2">Project 1</h2>
            <Link className="underline text-sky-500 hover:text-sky-600 active:text-sky-400 transition duration-150 mb-6" href="https://github.com/NxtPerfect">Github</Link>
            <p className="font-light max-w-[30ch] line-clamp-3">Description of this project is very complex and it's so complex that in fact it kind of overflow but that's why there are these symbols to keep this from overflowing you know what i'm saying gang gang</p>
          </div>
        </div>
      </div>
    </>
  );
}
