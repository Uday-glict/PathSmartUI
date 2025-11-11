import React from "react";
import "../../assets/css/layout_css/hero.css";

const Hero = () => {
  return (
    <>
       <div className="main-section">
      <div className="content-center">
        <button className="orange-btn mt-20">Intelligent Insights</button>

        <div className="title-block">
          <h1 className="main-title">AI THAT MAKES EVERYTHING</h1>
          <h1 className="main-title mb-12">MAKE SENSE</h1>
          <h6 className="subtitle">
            Path AI simplifies the complex, delivering clear, actionable insights
          </h6>
          <h6 className="subtitle">
            with the intelligence of AI and the intuition of human
          </h6>
        </div>

        <div className="mt-6">
          <button className="orange-btn-lg">Intelligent Insights</button>
        </div>
      </div>

      <div className="grid-section">
        <div className="grid-box">
          <button className="white-btn mt-20 mb-5">Our Mission</button>
          <h4 className="grid-text">
            Bringing Clarity to Complexity, So You Can Make Smarter Decisions, Faster.
          </h4>
        </div>

        <div className="grid-text-col">
          <h6>
            Vexa AI makes intelligence feel effortless and human. 
            <br/>
            <br/>
            Our systems simplify information, adapt to you, and empower
            confident action.
            <br/>
            <br/>
            From smart automation to sharp decisions, Vexa AI helps you think
            faster and achieve more.
            <br/>
            <br/>
             We turn
            complexity into clarity that drives progress.
            <br/>
            <br/>
            From smart automation to sharp decisions, Vexa AI helps you think
            faster and achieve more.
          </h6>
        </div>
      </div>
    </div>
    </>
  );
};
export default Hero;
