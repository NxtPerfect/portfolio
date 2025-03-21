"use client";
import CTAButton from "@/components/CTAButton";
import LinkTo from "@/components/LinkTo";
import ProjectList from "@/components/ProjectList";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main className={`flex flex-col bg-white dark:bg-black p-4
justify-center justify-items-center items-center text-center py-24
text-background dark:text-primary`}>
      <div className="flex flex-col w-3/4 justify-items-center">
        <div className="min-h-[100svh]">
          <h2 className="text-h2">I&apos;m Hazel</h2>
          <h1 className="text-h1 mt-[-1rem]">Full-Stack JavaScript Developer</h1>
          <p className="text-p mt-12">
            Languages: JavaScript, TypeScript, Python, C, SQL, Java
          </p>
          <p className="text-p">
            Frameworks/Libraries: React, Nextjs, Express, Nodejs, Pandas, Numpy
          </p>
          <CTAButton>
            HIRE ME
          </CTAButton>
        </div>
        <div className="mt-[50svh] w-full flex flex-col gap-8 flex-wrap text-left">
          <div className="min-h-[100svh]">
            <h2 className="text-h2 mt-16 ml-16">Projects</h2>
            <ProjectList />
            <p className="text-p ml-16 mt-4">
              and many more on my {" "}
              <LinkTo href="https://github.com/me">
                github
              </LinkTo>
            </p>
          </div>
          <div className="mt-[50svh] min-h-[100svh]">
            <h2 className="text-h2">Timeline</h2>
            <Timeline />
          </div>
          <div className="mt-[50svh] min-h-[100svh]">
            <h2 id="contact" className="text-h2">Hire me</h2>
            <p className="text-p">Contact me on my <LinkTo href="https://linkedin.com">LinkedIn</LinkTo> or through <LinkTo href="mailto:email@me.com">email@me.com</LinkTo></p>
          </div>
        </div>
      </div>
    </main>
  );
}
