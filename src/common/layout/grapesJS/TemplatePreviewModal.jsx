import React from "react";

const TemplatePreviewModal = ({ html, css, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-3/4 h-3/4 overflow-auto relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded"
        >
          ✕
        </button>
        <style>{css}</style>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
};

export default TemplatePreviewModal;
