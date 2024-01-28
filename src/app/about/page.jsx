import Heading from "@/components/Heading";
import Image from "next/image";

const About = () => {
  const skills = [
    {
      name: "NodeJS",
      url: "/skills/node.png",
      bgColor: "bg-purple-200",
    },
    {
      name: "CSS",
      url: "/skills/css.png",
      bgColor: "bg-purple-200",
    },
    {
      name: "Figma",
      url: "/skills/figma.png",
      bgColor: "bg-purple-200",
    },
    {
      name: "Flutter",
      url: "/skills/flutter.png",
      bgColor: "bg-purple-200",
    },
    {
      name: "Git",
      url: "/skills/git.png",
      bgColor: "bg-purple-200",
    },
    {
      name: "GraphQL",
      url: "/skills/graphql.png",
      bgColor: "bg-purple-200",
    },
    {
      name: "HTML",
      url: "/skills/html.png",
      bgColor: "bg-purple-200",
    },
    {
      name: "JavaScript",
      url: "/skills/javascript.png",
      bgColor: "bg-purple-200",
    },
    {
      name: "MaterialUI",
      url: "/skills/mu5.png",
      bgColor: "bg-purple-200",
    },
    {
      name: "Python",
      url: "/skills/python.png",
      bgColor: "bg-purple-200",
    },
    {
      name: "React",
      url: "/skills/react.png",
      bgColor: "bg-purple-200",
    },
    {
      name: "Redux",
      url: "/skills/redux.png",
      bgColor: "bg-purple-200",
    },
    {
      name: "Typescript",
      url: "/skills/typescript.png",
      bgColor: "bg-purple-200",
    },
    {
      name: "NodeJS",
      url: "/skills/node.png",
      bgColor: "bg-purple-200",
    },
  ];

  return (
    <div className="max-w-7xl ">
      <div className="flex items-center justify-center flex-col gap-4 mt-8">
        <Heading>About me</Heading>
        <h3 className="self-start text-white font-montA sm:text-2xl text-xl font-bold">
          Get to know me!
        </h3>
        <p className="text-white-800 font-montA sm:text-xl text-lg">
          I'm a{" "}
          <span className="text-white font-bold">Full Stack Developer</span>{" "}
          building the Front-end & Back-end of Websites and Mobile Applications
          that leads to the success of the overall product. Check out some of my
          work in the <span className="text-white font-bold">Projects</span>{" "}
          section.
        </p>
        <p className="text-white-800 font-montA sm:text-xl text-lg">
          I also like sharing content related to the stuff that I have learned
          over the years in{" "}
          <span className="text-white font-bold">Web Development</span> so it
          can help other people of the Dev Community. Feel free to Connect or
          Follow me on my{" "}
          <span className="text-white font-bold underline">LinkedIn</span> where
          I post useful content related to Web Development and Programming
        </p>
        <p className="text-white-800 font-montA sm:text-xl text-lg">
          I'm open to <span className="text-white font-bold">Job</span>{" "}
          opportunities where I can contribute, learn and grow. If you have a
          good opportunity that matches my skills and experience then don't
          hesitate to <span className="text-white font-bold">contact</span> me.
        </p>
      </div>

      <div>
        <p className="mt-7 text-white font-montA sm:text-2xl text-xl font-bold">
          My Skills
        </p>
        <div className="mt-3 flex flex-wrap justify-center items-center">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 ">
            {skills.map((item) => (
              <div className="flex items-center justify-center flex-col">
                <div className={`${item.bgColor} rounded-full p-3 `}>
                  <Image src={item.url} width={50} height={50} />
                </div>
                <p className="text-white-800 font-montA sm:text-xl text-lg">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="h-60  bg-blue-900">2</div>
        </div>
      </div>
    </div>
  );
};

export default About;
