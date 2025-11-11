import "./App.css";
import LandingMain from "./common/layout/landingMain.jsx";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/layout/login.jsx";
import SignupStep1 from "./components/layout/signup_step/signup_step1.jsx";
import Onboarding from "./common/layout/grapesJS/OnboardingBuilder.jsx";    

function App() {
  return (
    <>
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<LandingMain/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signup" element={<SignupStep1/>}/>
              <Route path="/onboarding" element={<Onboarding/>}/>
          </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
