import React, { useState, useEffect } from "react";
// Note: Using fetch instead of axios for simplicity and consistency with the rest of the generated files
const BASE_URL = "https://path-smart.vercel.app/api";
const GUIDE_ID = 101; // The ID of the guide the user is currently running
const STORAGE_KEY = `guide_progress_${GUIDE_ID}`; // Unique key for localStorage

// --- Utility function to parse the AI coordinates ---
const parseCoordinates = (coordStr) => {
  if (!coordStr) return null;
  const parts = coordStr.split(",").reduce((acc, part) => {
    const [key, value] = part.split(":");
    acc[key.trim()] = parseFloat(value.trim());
    return acc;
  }, {});
  return parts;
};

// Function to normalize URLs for comparison (remove trailing slash)
const normalizeUrl = (url) => (url ? url.replace(/\/$/, "") : "");

// --- Guide Runner Component ---
function GuideRunner() {
  // Load initial index from localStorage, defaulting to 0
  const initialIndex = parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10);

  const [allSteps, setAllSteps] = useState([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(initialIndex);
  const [currentStep, setCurrentStep] = useState(null);
  const [tourActive, setTourActive] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // 1. Fetch Guide Data on Load

  useEffect(() => {
    const fetchGuide = async () => {
      try {
        const response = await fetch(`${BASE_URL}/guides/${GUIDE_ID}`);
        if (!response.ok) throw new Error("Failed to fetch guide data");
        const data = await response.json();
        setAllSteps(data.steps || []);
        setTourActive(true); // Attempt to start the guide
      } catch (error) {
        console.error("Error fetching guide:", error);
        setTourActive(false);
      } finally {
        setIsLoading(false);
      }
    };
    fetchGuide();
  }, []); // 2. Handle Step Progression (including navigation)

  const handleNextStep = () => {
    const nextIndex = currentStepIndex + 1;

    if (nextIndex < allSteps.length) {
      const nextStep = allSteps[nextIndex];
      const nextUrl = normalizeUrl(nextStep.target_page_url);
      const currentUrl = normalizeUrl(window.location.href); // Save the *next* index before navigating or updating state

      localStorage.setItem(STORAGE_KEY, nextIndex.toString());

      if (nextUrl === currentUrl) {
        // Same page, update index and trigger re-render
        setCurrentStepIndex(nextIndex);
      } else {
        // Different page, redirect (which causes reload and state loss,
        // but the index is saved in localStorage)
        window.location.href = nextStep.target_page_url;
      }
    } else {
      // Tour complete
      setCurrentStep(null);
      setTourActive(false); // Clear progress when finished
      localStorage.removeItem(STORAGE_KEY);
    }
  }; // 3. Update Current Step when Index or Steps change (Crucial logic)

  useEffect(() => {
    if (isLoading || !allSteps || allSteps.length === 0) return;
    const current = allSteps[currentStepIndex];
    const currentUrl = normalizeUrl(window.location.href);

    if (!current) {
      setCurrentStep(null);
      setTourActive(false);
      return;
    }

    const stepUrl = normalizeUrl(current.target_page_url); // If the index points to a step that matches the current page, show it.

    if (currentUrl === stepUrl) {
      setCurrentStep(current);
      setTourActive(true);
    } else {
      // If the index points to a step on a different page, guide the user.
      setCurrentStep({
        ...current,
        title: `Step ${currentStepIndex + 1}: Navigate to the Correct Page`,
        content: `This step requires you to be at the following URL: ${current.target_page_url}. Please click the 'Next Step' button once you are there.`,
        ai_coordinates: null, // Don't show a marker for navigation step
      }); // Keep tour active but don't rely on coordinates
      setTourActive(true);
    }
  }, [allSteps, currentStepIndex, isLoading]); // Removed window.location.href as dependency // 4. Render Logic

  if (isLoading || !tourActive || !currentStep) {
    return null; // Guide is loading or finished
  }

  const coords = currentStep.ai_coordinates
    ? parseCoordinates(currentStep.ai_coordinates)
    : null;
  const isNavigationStep = coords === null; // Set up modal style to be centered if there are no coordinates (Navigation Step)

  let modalStyle = {
    position: "fixed", // Use fixed for page-centric positioning
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "350px",
    minWidth: "280px",
    maxWidth: "400px",
    zIndex: 10000,
  }; // If coordinates exist, position the modal near the target
  if (coords) {
    modalStyle = {
      ...modalStyle,
      position: "absolute",
      left: `${coords.x + coords.w / 2}px`, // Place to the right of the target center
      top: `${coords.y}px`,
      transform: "translateX(20px) translateY(-50%)", // Offset from center of target
    };
  }
  return (
    <>
  {/* Transparent overlay — allows full background visibility */}
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "transparent", // no dark layer
      pointerEvents: "none", // ensures user can still interact with background if needed
      zIndex: 9998,
    }}
  />

  {/* Tooltip bubble */}
  <div className="tooltip-bubble" style={modalStyle}>
    <h3 className="tooltip-title">{currentStep.title}</h3>
    <p className="tooltip-content">{currentStep.content}</p>

    <div className="tooltip-actions">
      <button onClick={handleNextStep} className="tooltip-button">
        {currentStepIndex < allSteps.length - 1 ? "Next Step →" : "Finish Guide"}
      </button>
    </div>
  </div>

  <style>{`
    @keyframes fadeIn {
      from { transform: scale(0.95); }
      to { transform: scale(1); }
    }
  `}</style>
</>

  );
}

export default GuideRunner;
