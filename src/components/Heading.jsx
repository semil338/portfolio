import React from "react";

const Heading = ({ children }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2 ">
      <p className="text-white font-cinzelD md:text-5xl sm:text-4xl xs:text-3xl text-3xl font-bold">
        {children}
      </p>
      <div className="w-20 h-1 bg-purple-200 rounded-md mb-4 "></div>
    </div>
  );
};

export default Heading;
