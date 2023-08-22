import { j as jsx, a as jsxs } from "../app.mjs";
function DropdownForm(projects, onHandleChange, value, id, name, autoComplete) {
  return /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      "select",
      {
        id: projects.id,
        name: projects.name,
        autoComplete,
        onChange: projects.onHandleChange,
        className: "block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md",
        children: [
          /* @__PURE__ */ jsx("option", { value: "", children: "Bitte wählen" }),
          projects.projects.map(({ name: name2 }) => /* @__PURE__ */ jsx("option", { value: name2, children: name2 }, name2))
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none", children: /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 text-gray-400", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M14.707 8.707a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 011.414 0z", clipRule: "evenodd" }) }) })
  ] }) });
}
export {
  DropdownForm as D
};
