import React from "react";

const Card = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-black/80 via-[#ff6600c9] to-black/80 py-20">
        <div className="text-center p-10 bg-[#ff6600c9] rounded-3xl mx-5 md:mx-20 flex flex-col justify-center items-center gap-6 shadow-lg">
          <h2 className="text-3xl md:text-4xl text-white font-bold">
            Do You Know More With Path AI
          </h2>

          <p className="text-white/90 text-sm md:text-base leading-relaxed">
            Experience the future of intelligent solutions. Simplify complexity
            and unlock
            <br />
            new possibilities with Path AI.
          </p>

          <div className="flex gap-4 mt-4">
            <button className="border-2 border-white bg-transparent px-6 py-2 text-white font-semibold rounded-full hover:bg-white hover:text-[#ff6600c9] transition-all duration-300">
              Learn More
            </button>
            <button className="border-2 border-white bg-white px-6 py-2 text-[#ff6600c9] font-semibold rounded-full hover:bg-transparent hover:text-white transition-all duration-300">
              Features
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Card;
