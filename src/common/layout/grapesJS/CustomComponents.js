// src/components/CustomComponents.js
export const registerCustomComponents = (editor) => {
  const domc = editor.DomComponents;

  // 🔹 Welcome Modal
  domc.addType("welcome-modal", {
    model: {
      defaults: {
        tagName: "div",
        attributes: { class: "welcome-modal" },
        components: `
          <div class="modal-box">
            <h2>Welcome to Onboarding!</h2>
            <p>Let's help you get started quickly.</p>
            <button>Get Started</button>
          </div>
        `,
        styles: `
          .welcome-modal {
            position: fixed;
            top: 0; left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.4);
          }
          .modal-box {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
            text-align: center;
            width: 400px;
          }
          .modal-box h2 { color: #111827; margin-bottom: 10px; }
          .modal-box button {
            background: #2563eb; color: white;
            border: none; padding: 10px 20px;
            border-radius: 6px; cursor: pointer;
          }
        `,
      },
    },
  });

  // 🔹 Form Modal
  domc.addType("form-modal", {
    model: {
      defaults: {
        tagName: "div",
        attributes: { class: "form-modal" },
        components: `
          <div class="modal-box">
            <h3>Sign Up</h3>
            <form>
              <input type="text" placeholder="Name"/>
              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <button type="submit">Submit</button>
            </form>
          </div>
        `,
        styles: `
          .form-modal {
            position: fixed;
            top: 0; left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.4);
          }
          .modal-box {
            background: #fff;
            padding: 30px;
            border-radius: 10px;
            width: 400px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
          }
          input {
            width: 100%;
            margin-bottom: 10px;
            padding: 8px;
            border-radius: 4px;
            border: 1px solid #ccc;
          }
          button {
            width: 100%;
            background: #16a34a;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 6px;
          }
        `,
      },
    },
  });
};
