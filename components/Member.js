import React from "react";

const Member = () => {
  return (
    <div className="container mx-auto ">
      <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
        STORIES
      </p>
      <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
        Our users say
      </p>
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
        <img src="/assets/guy.svg" alt="" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Martin Jackson</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">Member</p>
          </div>
          <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
            aaaaaaaaaaaaaaaaaaaaaaa <br /> bbbbbbbbbbbbbbbbbbbbbbb <br /> ccccccccccccccccccccc <br />
            dddddddddddddddddddddddddd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Member;
