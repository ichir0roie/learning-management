import { applyCSS } from "../-/deno.land/x/aleph@v0.3.0-beta.19/framework/core/style.js";
export const css = "/* style/reset.css */\n* {\n  margin: 0;\n  padding: 0;\n  border: none;\n  outline: none;\n  font: inherit;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent;\n}\nbody {\n  font-family:\n    \"Helvetica Neue\",\n    Helvetica,\n    Arial,\n    sans-serif;\n  font-size: 16px;\n}\n\n/* style/index.css */\nmain {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n}\n.page h1 {\n  margin: 0;\n  line-height: 1.5;\n  font-size: 18px;\n  font-weight: 400;\n  text-align: center;\n  color: #000;\n}\n.page h1 strong {\n  font-weight: 700;\n}\n.page p {\n  margin: 0;\n  line-height: 1.5;\n  text-align: center;\n  color: #333;\n}\n.logo + p {\n  margin-top: 6px;\n}\n.links span,\n.links a {\n  display: inline-block;\n  vertical-align: middle;\n}\n.links span {\n  color: #999;\n}\n.links span::after {\n  content: \"\\b7\";\n}\n.links a {\n  margin: 0 9px;\n  color: #666;\n  text-decoration: none;\n  transition: color 0.15s ease-in;\n}\n.links a:hover {\n  color: #000;\n}\n.counter {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 270px;\n  height: 48px;\n  margin: 30px auto 0;\n  border: 1px solid #eee;\n  border-radius: 6px;\n  transition: border-color 0.15s ease-in;\n}\n.counter:hover {\n  border-color: #ccc;\n}\n.counter em {\n  display: inline-block;\n  width: 48px;\n  font-weight: 400;\n  text-align: center;\n  color: #999;\n}\n.counter strong {\n  display: inline-block;\n  width: 48px;\n  font-weight: 600;\n  text-align: center;\n}\n.counter button {\n  display: line-flex;\n  align-items: center;\n  justify-content: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 3px;\n  border: 1px solid #ddd;\n  line-height: 1;\n  font-size: 12px;\n  font-family: Courier, monospace;\n  font-weight: 600;\n  color: #999;\n  transition: color 0.1s ease-in-out, border-color 0.1s ease-in-out;\n  cursor: pointer;\n}\n.counter button:hover {\n  color: #000;\n  border-color: #ccc;\n}\n.counter button + button {\n  margin-left: 9px;\n}\n.page .copyinfo {\n  margin-top: 30px;\n  font-size: 14px;\n  color: #999;\n}";
export default {
};
applyCSS("/style/index.css", {
    css
});

//# sourceMappingURL=index.css.js.map