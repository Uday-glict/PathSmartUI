import React from "react";
import section_ai from "../../assets/images/section_ai.jpg";
import tiger from "../../assets/images/tiger.jpg";
import { Brain, Sparkles } from "lucide-react";

const Section_AI = () => {
  return (
    <> 
      <section className="flex justify-between origin-center items-center m-20 ">
        <div className="w-180 h-150 rounded-2xl flex flex-col justify-center gap-4 m-20">
          <img src={section_ai} alt="image" className="w-80% h-65% rounded-4xl" />
        </div>
        <div className="w-180 h-150 rounded-2xl flex flex-col justify-center p-2 gap-4">
            <button className="text-center border-2 border-white w-20 h-10 rounded-xl p-2 bg-[#ff6600c9] text-white font-semibold hover:scale-105 transition-all duration-300 ease-in-out animate-fadeUp    ">
            Features
          </button>
          <h2 className="text-5xl font-semibold ">
            Turn idea into reality with one prompt.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-2">
            {/* Card 1 */}
            <div className="rounded-2xl flex flex-col items-center p-5 gap-3 bg-[#ff6600c9] text-white shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out animate-fadeUp">
               <Brain className="w-8 h-8 text-white" />
               <h4 className="text-xl font-semibold">
                Intelligent Understanding
              </h4>
              <p className="text-gray-100 text-sm">
                Path AI built for humans, not just experts — clear, intuitive
                outputs.
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl flex flex-col items-center p-5 gap-3 bg-[#ff6600c9] text-white shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out animate-fadeUp">
              <Sparkles className="w-8 h-8 text-white" />
               <h4 className="text-xl font-semibold">
                Intelligent Understanding
              </h4>
              <p className="text-gray-100 text-sm">
                Path AI built for humans, not just experts — clear, intuitive
                outputs.
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl flex flex-col items-center p-5 gap-3 bg-[#ff6600c9] text-white shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out animate-fadeUp">
              <Brain className="w-8 h-8 text-white" />
              <h4 className="text-xl font-semibold">
                Intelligent Understanding
              </h4>
              <p className="text-gray-100 text-sm">
                Path AI built for humans, not just experts — clear, intuitive
                outputs.
              </p>
            </div>
            {/* Card 4 */}
            <div className="rounded-2xl flex flex-col items-center p-5 gap-3 bg-[#ff6600c9] text-white shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out animate-fadeUp">
              <Sparkles className="w-8 h-8 text-white" />
              <h4 className="text-xl font-semibold">
                Intelligent Understanding
              </h4>
              <p className="text-gray-100 text-sm">
                Path AI built for humans, not just experts — clear, intuitive
                outputs.
              </p>
            </div>
          </div>
        </div>
        
      </section>  
      <div>
            <img src={tiger} alt="image" className="w-50% h-5%" />
        </div>                                  
    </>
    );  
}
export default Section_AI;