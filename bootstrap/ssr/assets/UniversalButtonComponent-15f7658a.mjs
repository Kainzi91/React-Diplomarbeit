import { j as jsx } from "../app.mjs";
import "react";
const UniversalButton = (props) => {
  return /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center p-5 pt-12", children: /* @__PURE__ */ jsx(
    "button",
    {
      onClick: props.href ? () => window.location.href = props.href : void 0,
      type: props.type,
      className: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
      children: props.text
    }
  ) });
};
const UniversalButton$1 = UniversalButton;
export {
  UniversalButton$1 as U
};
