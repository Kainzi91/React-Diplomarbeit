import { a as jsxs, j as jsx } from "../app.mjs";
import { Head } from "@inertiajs/react";
import { L as LoggedIn } from "./ChangeNavbarComponent-62f4d9cc.mjs";
import React, { useState } from "react";
import "react/jsx-runtime";
import "lodash";
import "axios";
import "react-dom/client";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "@mui/icons-material/Settings.js";
function ProjectNotes$1(props) {
  const [filter, setFilter] = useState("");
  function formatTextWithLineBreaks(text) {
    return text.split("\n").map((line, index) => /* @__PURE__ */ jsxs(React.Fragment, { children: [
      line,
      /* @__PURE__ */ jsx("br", {})
    ] }, index));
  }
  const filteredData = filter.length >= 1 ? props.props.data.filter(
    (entry) => entry.project.toLowerCase().includes(filter.toLowerCase())
  ) : props.props.data;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "p-6 bg-white rounded-lg shadow-md m-6 space-y-2", children: /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        className: "w-full p-2 border border-gray-300 rounded",
        placeholder: "Projektname filtern...",
        value: filter,
        onChange: (e) => setFilter(e.target.value)
      }
    ) }),
    filteredData.map((entry, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-6 bg-white rounded-lg shadow-md m-6 space-y-2",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-extrabold font-semibold", children: entry.project }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-gray-600 mr-4", children: entry.created_at }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center mx-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-24 h-2 bg-red-300 mr-2 rounded", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `h-2 rounded ${entry.status >= 50 ? "bg-green-500" : "bg-red-500"}`,
                    style: { width: `${entry.status}%` }
                  }
                ) }),
                /* @__PURE__ */ jsxs("span", { className: "text-sm font-semibold", children: [
                  entry.status,
                  "%"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold", children: [
            " ",
            entry.firstname,
            " ",
            entry.lastname
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold", children: entry.department }),
          /* @__PURE__ */ jsx("div", { className: "p-4 bg-gray-100 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm", children: formatTextWithLineBreaks(entry.note) }) })
        ]
      },
      index
    ))
  ] });
}
function ProjectNotes(props) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "ProjectNotes" }),
    /* @__PURE__ */ jsx(LoggedIn, { auth: props.auth }),
    /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("h1", { className: "max-w-7xl text-xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: "Notizen" }) }),
    /* @__PURE__ */ jsx(ProjectNotes$1, { props })
  ] });
}
export {
  ProjectNotes as default
};
