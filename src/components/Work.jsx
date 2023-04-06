import React from "react";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-gray-200">
      {/* Container */}
      <div className="max-w-[1000px] p-4 w-full flex flex-col justify-center mx-auto">
        <div>
          <p className="text-3xl font-bold py-4 inline border-b-4 border-black">
            work
          </p>
          <p className="py-8">//just something I dabbled with</p>
          {/* personal projects */}

          <div className="flex justify-center py-2 border-b-2 border-[#595850]">
            <p>courses</p>
          </div>
          <div className=" grid grid-col-3">Hello</div>
          {/* courses */}
          <div className="flex justify-center py-2 border-b-2 border-[#595850]">
            <p>personal projects</p>
          </div>
          {/* clones*/}
          <div className="flex justify-center py-2 border-b-2 border-[#595850]">
            <p>clones</p>
          </div>
          {/* awards*/}
          <div className="flex justify-center py-2 border-b-2 border-[#595850]">
            <p>awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
