// src/components/CustomBlocks.js
export const registerCustomBlocks = (editor) => {
  const bm = editor.BlockManager;

  bm.add("welcome-modal-block", {
    label: "Welcome Modal",
    category: "Modals",
    content: { type: "welcome-modal" },
  });

  bm.add("form-modal-block", {
    label: "Form Modal",
    category: "Modals",
    content: { type: "form-modal" },
  });
};
