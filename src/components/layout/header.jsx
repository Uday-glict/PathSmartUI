import React from "react";
import '../../assets/css/layout_css/header.css';
import logo from "../../assets/images/logo1.png";


const Header = () => {
   return(
    <>
       <div className="main-div  text-white p-6">
             <div className="flex justify-center items-center gap-2 ml-4">
                <img src={logo}
                 alt="Pathwise Logo" width="50" height="50" className="rounded-2xl"/>
                <h2 className="font-extrabold text-2xl text-[#c9c3c0dd]">Path AI</h2>
             </div>
             <div >
                <ul className=" flex justify-between origin-center gap-6">
                    <li className="font-bold text-[#c9c3c0dd]">Features</li>
                    <li className="font-bold text-[#c9c3c0dd]">Use Cases</li>
                    <li className="font-bold text-[#c9c3c0dd]">Pricing</li>
                    <li className="font-bold text-[#c9c3c0dd]">Contact</li>
                </ul>
             </div>
             <div className="flex items-center">
                <button className="bg-[#f55606d7] p-2 pl-2 pr-2 rounded-xl  text-white">Get Started</button>
             </div>
       </div>
    </>
   )
}
export default Header;
