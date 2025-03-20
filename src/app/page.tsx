import LinkTo from "@/components/LinkTo";
import ProjectList from "@/components/ProjectList";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className={`flex flex-col bg-white dark:bg-black p-4
justify-center justify-items-center items-center text-center py-32`}>
      <div className="flex flex-col w-1/2 justify-items-center">
        <h2 className="text-h2">I&apos;m Hazel</h2>
        <h1 className="text-h1 mt-[-1rem]">Full-Stack JavaScript Developer</h1>
        <p className="text-p">
          Languages: JavaScript, TypeScript, Python, C, SQL, Java
        </p>
        <p className="text-p">
          Frameworks/Libraries: React, Nextjs, Express, Nodejs, Pandas, Numpy
        </p>
        <div className="w-full flex flex-col gap-8 flex-wrap text-left">
          <div>
            <h2 className="text-h2 mt-16">Projects</h2>
            <ProjectList />
            <p className="text-p">and many more on my <LinkTo href="https://github.com/me">github</LinkTo></p>
          </div>
          <div>
            <h2 className="text-h2">Timeline</h2>
            <Timeline />
          </div>
          <div>
            <h2 className="text-h2">Hire me</h2>
            <p className="text-p">Contact me on my <LinkTo href="https://linkedin.com">LinkedIn</LinkTo> or through <LinkTo href="mail:to email@me.com">email@me.com</LinkTo></p>
          </div>
        </div>
      </div>
    </main>
  );
}
