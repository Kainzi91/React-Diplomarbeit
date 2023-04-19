import { a as jsxs, j as jsx } from "../app.mjs";
import { useState } from "react";
import { L as LoggedIn } from "./ChangeNavbarComponent-9de9bf28.mjs";
import "./TextInput-1dae6f47.mjs";
import { Head } from "@inertiajs/react";
import UpdatePasswordForm from "./UpdatePasswordForm-b519f128.mjs";
import UpdateProfileInformation from "./UpdateProfileInformationForm-f1740f30.mjs";
import "react/jsx-runtime";
import "lodash";
import "axios";
import "react-dom/client";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "@mui/icons-material/Settings.js";
import "./InputLabel-26a85203.mjs";
import "./PrimaryButton-b06b784c.mjs";
function Authenticated({ auth, header, children }) {
  useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-100", children: [
    /* @__PURE__ */ jsx(LoggedIn, { auth }),
    header && /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: header }) }),
    /* @__PURE__ */ jsx("main", { children })
  ] });
}
function Edit({ auth, mustVerifyEmail, status }) {
  return /* @__PURE__ */ jsxs(
    Authenticated,
    {
      auth,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Profile" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Profile" }),
        /* @__PURE__ */ jsx("div", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(
            UpdateProfileInformation,
            {
              mustVerifyEmail,
              status,
              className: "max-w-xl"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-4 sm:p-8 bg-white shadow sm:rounded-lg", children: /* @__PURE__ */ jsx(UpdatePasswordForm, { className: "max-w-xl" }) })
        ] }) })
      ]
    }
  );
}
export {
  Edit as default
};
