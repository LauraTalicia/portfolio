import Link from "next/link";
import { CMS_NAME } from "../lib/constants";

const Intro = ({ title }: { title: string }) => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <span>
          <Link href="/"> Home</Link>
        </span>
        <span>
          <Link href="/projects"> My Projects</Link>
        </span>
        <span>
          <Link href="/about"> About me</Link>
        </span>
      </h4>
    </section>
  );
};

export default Intro;
