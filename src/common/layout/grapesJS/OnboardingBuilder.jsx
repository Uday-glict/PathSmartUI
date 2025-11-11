// src/components/OnboardingBuilder.jsx
import React, { useEffect, useRef, useState } from "react";
import { initGrapesEditor } from "./GrapesJSConfig";
import TemplatePreviewModal from "./TemplatePreviewModal";

const OnboardingBuilder = () => {
  const editorRef = useRef(null);
  const [preview, setPreview] = useState({ html: "", css: "" });
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    editorRef.current = initGrapesEditor("gjs", (html, css) => {
      setPreview({ html, css });
      setShowPreview(true);
    });
  }, []);

  return (
    <div className="flex h-screen">
      {/* Sidebar for Components */}
      <div id="blocks" className="w-1/4 bg-gray-100 border-r p-3 overflow-auto"></div>

      {/* Middle Screen Canvas Area */}
      <div className="flex-1 bg-gray-50 relative">
        <div id="gjs" className="absolute inset-0"></div>
      </div>

      {/* Save + Preview Buttons */}
      <div className="panel__basic-actions fixed bottom-4 right-4 flex gap-3">
        <button className="bg-blue-600 text-white px-4 py-2 rounded btn-save">Save</button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded btn-preview">Preview</button>
      </div>

      {showPreview && (
        <TemplatePreviewModal
          html={preview.html}
          css={preview.css}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
};

export default OnboardingBuilder;
