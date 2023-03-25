import { j as jsx } from "../app.mjs";
function InputLabel({ forInput, value, className, children }) {
  return /* @__PURE__ */ jsx("label", { htmlFor: forInput, className: `block font-medium text-sm text-gray-700 ` + className, children: value ? value : children });
}
export {
  InputLabel as I
};
