import Heading from "@/components/Heading";

const About = () => {
  return (
    <div className="max-w-7xl ">
      <div className="flex items-center justify-center flex-col gap-4 mt-8">
        <Heading>About me</Heading>
        <div className="self-start text-white font-montA sm:text-2xl text-xl font-bold">
          Get to know me!
        </div>
        <div className="text-white-800 font-montA sm:text-xl text-lg">
          I'm a{" "}
          <span className="text-white font-bold">Full Stack Developer</span>{" "}
          building the Front-end & Back-end of Websites and Mobile Applications
          that leads to the success of the overall product. Check out some of my
          work in the <span className="text-white font-bold">Projects</span>{" "}
          section.
        </div>
        <div className="text-white-800 font-montA sm:text-xl text-lg">
          I also like sharing content related to the stuff that I have learned
          over the years in{" "}
          <span className="text-white font-bold">Web Development</span> so it
          can help other people of the Dev Community. Feel free to Connect or
          Follow me on my{" "}
          <span className="text-white font-bold underline">LinkedIn</span> where
          I post useful content related to Web Development and Programming
        </div>
        <div className="text-white-800 font-montA sm:text-xl text-lg">
          I'm open to <span className="text-white font-bold">Job</span>{" "}
          opportunities where I can contribute, learn and grow. If you have a
          good opportunity that matches my skills and experience then don't
          hesitate to <span className="text-white font-bold">contact</span> me.
        </div>
      </div>

      <div className="mt-7 text-white font-montA sm:text-2xl text-xl font-bold">
        My Skills
      </div>
    </div>
  );
};

export default About;
