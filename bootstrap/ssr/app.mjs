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
  resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, /* @__PURE__ */ Object.assign({ "./Pages/Admin/AdminHome.jsx": () => import("./assets/AdminHome-0c31cbbf.mjs"), "./Pages/Admin/AdminInsertPage.jsx": () => import("./assets/AdminInsertPage-61193180.mjs"), "./Pages/Admin/AdminUpdatePage.jsx": () => import("./assets/AdminUpdatePage-ddd42392.mjs"), "./Pages/Auth/ConfirmPassword.jsx": () => import("./assets/ConfirmPassword-71ccaa42.mjs"), "./Pages/Auth/ForgotPassword.jsx": () => import("./assets/ForgotPassword-b163302b.mjs"), "./Pages/Auth/Login.jsx": () => import("./assets/Login-6f767ef5.mjs"), "./Pages/Auth/Register.jsx": () => import("./assets/Register-6454d661.mjs"), "./Pages/Auth/ResetPassword.jsx": () => import("./assets/ResetPassword-8ba2dd61.mjs"), "./Pages/Auth/VerifyEmail.jsx": () => import("./assets/VerifyEmail-4025dc06.mjs"), "./Pages/Login/LoginPage.jsx": () => import("./assets/LoginPage-880744d4.mjs"), "./Pages/NewsPage.jsx": () => import("./assets/NewsPage-460d8252.mjs"), "./Pages/Profile/Edit.jsx": () => import("./assets/Edit-55117413.mjs"), "./Pages/Profile/Partials/DeleteUserForm.jsx": () => import("./assets/DeleteUserForm-14f063cc.mjs"), "./Pages/Profile/Partials/UpdatePasswordForm.jsx": () => import("./assets/UpdatePasswordForm-b519f128.mjs"), "./Pages/Profile/Partials/UpdateProfileInformationForm.jsx": () => import("./assets/UpdateProfileInformationForm-f1740f30.mjs"), "./Pages/Project/ProjectHome.jsx": () => import("./assets/ProjectHome-a6a1ab81.mjs"), "./Pages/Project/ProjectInsertPage.jsx": () => import("./assets/ProjectInsertPage-f2f7b30c.mjs"), "./Pages/Project/ProjectNotes.jsx": () => import("./assets/ProjectNotes-1a595759.mjs"), "./Pages/Project/ProjectUpdatePage.jsx": () => import("./assets/ProjectUpdatePage-abba1156.mjs"), "./Pages/Scheduler.jsx": () => import("./assets/Scheduler-1784ee97.mjs"), "./Pages/Statistic/Statistic.jsx": () => import("./assets/Statistic-dd1454b7.mjs") })),
  setup({ el, App, props }) {
    const root = createRoot(el);
    root.render(
      /* @__PURE__ */ jsx(App, { ...props })
    );
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
