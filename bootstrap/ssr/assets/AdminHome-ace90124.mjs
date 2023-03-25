import { j as jsx, a as jsxs } from "../app.mjs";
import { Head } from "@inertiajs/react";
import { L as LoggedIn } from "./ChangeNavbarComponent-c012f99c.mjs";
import "react";
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
function AdminTable(props) {
  console.log(JSON.parse(props.props[0]));
  const handleDelete = (id, name) => {
    if (window.confirm(`Möchten Sie den Benutzer ${name} wirklich löschen?`)) {
      axios.post(`/api/deleteUser`, { id }).then((response) => {
        alert(`Benutzer ${name} wurde erfolgreich gelöscht.`);
        setIsReloaded(true);
      }).catch((error) => {
        console.error(error);
        alert(`Beim Löschen des Benutzers ${name} ist ein Fehler aufgetreten.`);
      });
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsx("div", { className: "p-1.5 w-full inline-block align-middle", children: /* @__PURE__ */ jsx("div", { className: "overflow-hidden border rounded-lg", children: /* @__PURE__ */ jsxs("table", { className: "min-w-full divide-y divide-gray-200", children: [
    /* @__PURE__ */ jsx("thead", { className: "bg-gray-50", children: /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx(
        "th",
        {
          scope: "col",
          className: "px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ",
          children: "ID"
        }
      ),
      /* @__PURE__ */ jsx(
        "th",
        {
          scope: "col",
          className: "px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ",
          children: "Name"
        }
      ),
      /* @__PURE__ */ jsx(
        "th",
        {
          scope: "col",
          className: "px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ",
          children: "Email"
        }
      ),
      /* @__PURE__ */ jsx(
        "th",
        {
          scope: "col",
          className: "px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ",
          children: "Role"
        }
      ),
      /* @__PURE__ */ jsx("td", { className: "px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase", children: /* @__PURE__ */ jsx(
        "a",
        {
          children: "Edit"
        }
      ) }),
      /* @__PURE__ */ jsx("td", { className: "px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase", children: /* @__PURE__ */ jsx(
        "a",
        {
          children: "Delete"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-gray-200", children: JSON.parse(props.props[0]).map(({ id, name, email, role }) => /* @__PURE__ */ jsxs("tr", { children: [
      /* @__PURE__ */ jsx("td", { name: "id", className: "px-6 py-4 text-sm text-gray-800 whitespace-nowrap", children: id }),
      /* @__PURE__ */ jsx("td", { name: "name", className: "px-6 py-4 text-sm text-gray-800 whitespace-nowrap", children: name }),
      /* @__PURE__ */ jsx("td", { name: "email", className: "px-6 py-4 text-sm text-gray-800 whitespace-nowrap", children: email }),
      /* @__PURE__ */ jsx("td", { name: "role", className: "px-6 py-4 text-sm text-gray-800 whitespace-nowrap", children: role }),
      /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-sm font-medium text-left whitespace-nowrap", children: /* @__PURE__ */ jsx(
        "a",
        {
          className: "text-green-500 hover:text-green-700",
          href: `AdminUpdatePage?id=${id}`,
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
    ] }, id)) })
  ] }) }) }) }) });
}
function myadmin(props) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "AdminHome" }),
    /* @__PURE__ */ jsx(LoggedIn, { auth: props.auth }),
    /* @__PURE__ */ jsx(
      UniversalButton,
      {
        type: "button",
        href: "AdminInsertPage",
        text: "Hinzufügen"
      }
    ),
    /* @__PURE__ */ jsx(AdminTable, { props })
  ] });
}
export {
  myadmin as default
};
