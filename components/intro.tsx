import Link from "next/link";
import { CMS_NAME } from "../lib/constants";

const Intro = ({ title, active }: { title: string; active: number }) => {
  const links = [
    ["Home", ""],
    ["Projekty", "projects"],
    ["O mnie", "about"],
  ];

  console.log(active);
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {links.map((link, i) => {
          return (
            <span>
              <Link
                href={`/${link[1]}`}
                className={`hover:underline text-lg mr-8 ${
                  i + 1 === active ? "font-bold text-xl" : ""
                }`}
              >
                {" "}
                {link[0]}
              </Link>
            </span>
          );
        })}
      </h4>
    </section>
  );
};

export default Intro;
