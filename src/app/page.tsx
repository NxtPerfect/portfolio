import LinkTo from "@/components/LinkTo";
import ProjectList from "@/components/ProjectList";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className={`flex flex-col bg-white dark:bg-black p-4
justify-center text-center`}>
      <h2 className="text-[2.5rem]">I&apos;m Hazel</h2>
      <h1 className="text-[4rem] mt-[-1rem]">Full-Stack JavaScript Developer</h1>
      <p className="text-[1.5rem]">
        Languages: JavaScript, TypeScript, Python, C, SQL, Java
      </p>
      <p className="text-[1.5rem]">
        Frameworks/Libraries: React, Nextjs, Express, Nodejs, Pandas, Numpy
      </p>
      <h2 className="text-[2.5rem] mt-16">Projects</h2>
      <ProjectList />
      <p>and many more on my <LinkTo href="https://github.com/me">github</LinkTo></p>
      <h2 className="text-[2.5rem]">Timeline</h2>
      <Timeline />
      <h2 className="text-[2.5rem]">Hire me</h2>
      <p>Contact me on my <LinkTo href="https://linkedin.com">LinkedIn</LinkTo> or through <LinkTo href="mail:to email@me.com">email@me.com</LinkTo></p>
    </main>
  );
}
