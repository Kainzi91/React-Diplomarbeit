var _a;
import * as jsxRuntime from "react/jsx-runtime";
import _ from "lodash";
import axios from "axios";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
const Fragment = jsxRuntime.Fragment;
const jsx = jsxRuntime.jsx;
const jsxs = jsxRuntime.jsxs;
window._ = _;
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const app = "";
async function resolvePageComponent(path, pages) {
  const page = pages[path];
  if (typeof page === "undefined") {
    throw new Error(`Page not found: ${path}`);
  }
  return typeof page === "function" ? page() : page;
}
const appName = ((_a = window.document.getElementsByTagName("title")[0]) == null ? void 0 : _a.innerText) || "Laravel";
createInertiaApp({
  title: (title) => `${title} - ${appName}`,
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.jsx`,
    /* @__PURE__ */ Object.assign({ "./Pages/Admin/AdminHome.jsx": () => import("./assets/AdminHome-8e2a2244.mjs"), "./Pages/Admin/AdminInsertPage.jsx": () => import("./assets/AdminInsertPage-c90328b1.mjs"), "./Pages/Admin/AdminUpdatePage.jsx": () => import("./assets/AdminUpdatePage-dd9ef2cf.mjs"), "./Pages/Auth/ConfirmPassword.jsx": () => import("./assets/ConfirmPassword-61c8de8f.mjs"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-ad47eceb.mjs"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-191b8aae.mjs"), "./Pages/Auth/Register.jsx": () => import("./assets/Register-941e5bfa.mjs"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-7365dc6f.mjs"), "./Pages/Auth/VerifyEmail.jsx": () => import("./assets/VerifyEmail-683f4e05.mjs"), "./Pages/Login/LoginPage.jsx": () => import("./assets/LoginPage-9be25458.mjs"), "./Pages/NewsPage.jsx": () => import("./assets/NewsPage-71525ff7.mjs"), "./Pages/Profile/Edit.jsx": () => import("./assets/Edit-9f9f0bc3.mjs"), "./Pages/Profile/Partials/DeleteUserForm.jsx": () => import("./assets/DeleteUserForm-48d00beb.mjs"), "./Pages/Profile/Partials/UpdatePasswordForm.jsx": () => import("./assets/UpdatePasswordForm-8e458df9.mjs"), "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": () => import("./assets/UpdateProfileInformationForm-3a9ef561.mjs"), "./Pages/Project/ProjectHome.jsx": () => import("./assets/ProjectHome-b55d0a8b.mjs"), "./Pages/Project/ProjectInsertPage.jsx": () => import("./assets/ProjectInsertPage-958bf448.mjs"), "./Pages/Project/ProjectNotes.jsx": () => import("./assets/ProjectNotes-c6701cc7.mjs"), "./Pages/Project/ProjectUpdatePage.jsx": () => import("./assets/ProjectUpdatePage-5c302b76.mjs"), "./Pages/Scheduler.jsx": () => import("./assets/Scheduler-900fcafc.mjs"), "./Pages/Statistic/Statistic.jsx": () => import("./assets/Statistic-5f775f9c.mjs") })
  ),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(/* @__PURE__ */ jsx(App, { ...props }));
  },
  progress: {
    color: "#4B5563"
  }
});
export {
  Fragment as F,
  jsxs as a,
  jsx as j
};
