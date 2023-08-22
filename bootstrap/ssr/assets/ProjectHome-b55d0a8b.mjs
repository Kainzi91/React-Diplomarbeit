import { j as jsx, a as jsxs } from "../app.mjs";
import { Head } from "@inertiajs/react";
import { L as LoggedIn } from "./ChangeNavbarComponent-62f4d9cc.mjs";
import { useState } from "react";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit.js";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever.js";
import { U as UniversalButton } from "./UniversalButtonComponent-15f7658a.mjs";
import "react/jsx-runtime";
import "lodash";
import "react-dom/client";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "@mui/icons-material/Settings.js";
function ProjectTable(props) {
  useState("");
  const handleDelete = (id, name) => {
    if (window.confirm(`Möchten Sie das Projekt ${name} wirklich löschen?`)) {
      axios.post(`/api/deleteProject`, { id }).then((response) => {
        alert(`Projekt ${name} wurde erfolgreich gelöscht.`);
        window.location.reload();
      }).catch((error) => {
        console.error(error);
        alert(
          `Beim Löschen des Projekts ${name} ist ein Fehler aufgetreten.`
        );
      });
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsx("div", { className: "p-1.5 w-full inline-block align-middle", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden border rounded-lg", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
    /* @__PURE__ */ jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx(
        "th",
        {
          scope: "col",
          className: "px-6 py-3 text-xs font-bold text-left text-gray-500 sm:table-cell hidden md:table-cell uppercase",
          children: "ID"
        }
      ),
      /* @__PURE__ */ jsx(
        "th",
        {
          scope: "col",
          className: "px-6 py-3 text-xs font-bold text-left text-gray-500 sm:table-cell hidden md:table-cell uppercase",
          children: "Projektnummer"
        }
      ),
      /* @__PURE__ */ jsx(
        "th",
        {
          scope: "col",
          className: "px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase",
          children: "Projektname"
        }
      ),
      /* @__PURE__ */ jsx(
        "th",
        {
          scope: "col",
          className: "px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase",
          children: "Edit"
        }
      ),
      /* @__PURE__ */ jsx(
        "th",
        {
          scope: "col",
          className: "px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase",
          children: "Delelte"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-gray-200", children: JSON.parse(props.props[0]).map(
      ({ id, project_number, name }) => /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx(
          "td",
          {
            name: "id",
            className: "px-6 py-4 text-sm text-gray-800 whitespace-nowrap hidden sm:table-cell",
            children: id
          }
        ),
        /* @__PURE__ */ jsx(
          "td",
          {
            name: "project_number",
            className: "px-6 py-4 text-sm text-gray-800 whitespace-nowrap hidden sm:table-cell",
            children: project_number
          }
        ),
        /* @__PURE__ */ jsx(
          "td",
          {
            name: "name",
            className: "px-6 py-4 text-sm text-gray-800 whitespace-nowrap",
            children: name
          }
        ),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-sm font-medium text-left whitespace-nowrap", children: /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-green-500 hover:text-green-700",
            href: `ProjectUpdatePage?id=${id}`,
            children: /* @__PURE__ */ jsx(EditIcon, {})
          }
        ) }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-sm font-medium text-left whitespace-nowrap", children: /* @__PURE__ */ jsx(
          "a",
          {
            className: "text-red-500 hover:text-red-700",
            href: "#",
            onClick: () => handleDelete(id, name),
            children: /* @__PURE__ */ jsx(DeleteForeverIcon, {})
          }
        ) })
      ] }, id)
    ) })
  ] }) }) }) }) });
}
function myprojects(props) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "ProjectHome" }),
    /* @__PURE__ */ jsx(LoggedIn, { auth: props.auth }),
    /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("h1", { className: "max-w-7xl text-xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: "Projekte" }) }),
    /* @__PURE__ */ jsx(
      UniversalButton,
      {
        href: "ProjectInsertPage",
        text: "Hinzufügen"
      }
    ),
    /* @__PURE__ */ jsx(ProjectTable, { props })
  ] });
}
export {
  myprojects as default
};
