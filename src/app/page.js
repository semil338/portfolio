import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="absolute top-0 max-w-7xl h-screen flex items-start justify-center flex-col gap-4 font-cinzelD md:px-16 px-6 ">
        <p className="self-start text-white-800 font-montA sm:text-xl text-lg">
          Hey, I'm
        </p>
        <h1 className="text-white font-cinzel md:text-7xl sm:text-6xl xs:text-5xl text-4xl font-bold">
          <span className="font-cinzelD">S</span>emil{" "}
          <span className="font-cinzelD">K</span>hedawala.
        </h1>
        <p className="text-white-800 font-montA sm:text-xl text-lg">
          A <span className="font-bold">Software Developer</span> who crafts
          solid and scalable products, <br className="hidden md:block" />
          using my tech skills and creativity to make impactful solutions.
        </p>
        <button className="mt-2 bg-white rounded-md sm:px-8 px-4 py-2 sm:text-xl text-lg font-montA">
          Projects
        </button>
        {/* <div>
          <div className="absolute md:px-12 px-6 bottom-0 left-0 hidden lg:flex items-center gap-5 flex-col   ">
            <Image src="/insta.svg" height={25} width={25} />
            <Image src="/linkedin.svg" height={25} width={25} />
            <Image src="/github.svg" height={25} width={25} />
            <div className="h-36 w-1 bg-white"></div>
          </div>
          <div className="absolute md:px-12 px-6 bottom-0 right-0 hidden lg:flex items-center gap-5 flex-col ">
            <p className="[writing-mode:vertical-rl] text-white text-lg font-montA">
              semilkhedawala@gmail.com
            </p>
            <div className="h-36 w-1 bg-white"></div>
          </div>
        </div> */}
      </main>
    </>
  );
}
