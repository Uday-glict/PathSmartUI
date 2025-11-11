// src/components/GrapesJSConfig.js
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-preset-webpage";
import "grapesjs-blocks-basic";
import { registerCustomComponents } from "./CustomComponents";
import { registerCustomBlocks } from "./CustomBlocks";

export const initGrapesEditor = (containerId, onSave) => {
  const editor = grapesjs.init({
    container: `#${containerId}`,
    height: "100vh",
    width: "auto",
    fromElement: false,
    storageManager: false,
    blockManager: { appendTo: "#blocks" },
    plugins: ["gjs-blocks-basic", "grapesjs-preset-webpage"],
    pluginsOpts: {
      "gjs-blocks-basic": { flexGrid: true },
    },
    deviceManager: {
      devices: [
        { name: "Desktop", width: "" },
        { name: "Tablet", width: "768px" },
        { name: "Mobile", width: "375px" },
      ],
    },
  });

  // ✅ Register Custom Components & Blocks
  registerCustomComponents(editor);
  registerCustomBlocks(editor);

  // ✅ Make dropped modals fullscreen automatically
  editor.on("component:add", (component) => {
    if (
      component.is("welcome-modal") ||
      component.is("form-modal") ||
      component.is("feature-modal")
    ) {
      component.addStyle({
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        "z-index": "1000",
        display: "flex",
        "align-items": "center",
        "justify-content": "center",
        background: "rgba(0, 0, 0, 0.4)",
      });
    }
  });

  // ✅ Add Save/Preview panel
  editor.Panels.addPanel({
    id: "actions",
    el: ".panel__basic-actions",
    buttons: [
      {
        id: "save",
        className: "btn-save",
        label: "💾 Save",
        command: () => onSave(editor.getHtml(), editor.getCss()),
      },
      {
        id: "preview",
        className: "btn-preview",
        label: "👁️ Preview",
        command: "core:preview",
      },
    ],
  });

  return editor;
};
