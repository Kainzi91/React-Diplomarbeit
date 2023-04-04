import { j as jsx, a as jsxs } from "../app.mjs";
import { useEffect } from "react";
import { G as Guest } from "./GuestLayout-0d282a42.mjs";
import { T as TextInput, I as InputError } from "./TextInput-1dae6f47.mjs";
import { I as InputLabel } from "./InputLabel-26a85203.mjs";
import { P as PrimaryButton } from "./PrimaryButton-b06b784c.mjs";
import { useForm, Head, Link } from "@inertiajs/react";
import "react/jsx-runtime";
import "lodash";
import "axios";
import "react-dom/client";
function Checkbox({ name, value, handleChange }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type: "checkbox",
      name,
      value,
      className: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500",
      onChange: (e) => handleChange(e)
    }
  );
}
const logo_container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1rem"
};
function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: ""
  });
  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);
  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox" ? event.target.checked : event.target.value
    );
  };
  const submit = (e) => {
    e.preventDefault();
    post(route("login"));
  };
  return /* @__PURE__ */ jsxs(Guest, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Log in" }),
    status && /* @__PURE__ */ jsx("div", { className: "mb-4 font-medium text-sm text-green-600", children: status }),
    /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { style: logo_container, children: /* @__PURE__ */ jsx(
          "img",
          {
            className: "w-100",
            src: "https://www.wiet.at/wp-content/uploads/2019/02/WIET-LOGO-firmennamen.png",
            srcSet: "https://www.wiet.at/wp-content/uploads/2019/02/WIET-LOGO-firmennamen-300x95.png 300w, https://www.wiet.at/wp-content/uploads/2019/02/WIET-LOGO-firmennamen.png 600w",
            alt: "WIET Logo",
            width: "150",
            height: "45"
          }
        ) }),
        /* @__PURE__ */ jsx(InputLabel, { forInput: "email", value: "Email" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "email",
            type: "email",
            name: "email",
            value: data.email,
            className: "mt-1 block w-full",
            autoComplete: "username",
            isFocused: true,
            handleChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsx(InputLabel, { forInput: "password", value: "Password" }),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "password",
            type: "password",
            name: "password",
            value: data.password,
            className: "mt-1 block w-full",
            autoComplete: "current-password",
            handleChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "block mt-4", children: /* @__PURE__ */ jsxs("label", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            name: "remember",
            value: data.remember,
            handleChange: onHandleChange
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-gray-600", children: "Remember me" })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end mt-4", children: [
        canResetPassword && /* @__PURE__ */ jsx(
          Link,
          {
            href: route("password.request"),
            className: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
            children: "Forgot your password?"
          }
        ),
        /* @__PURE__ */ jsx(PrimaryButton, { className: "ml-4", processing, children: "Log in" })
      ] })
    ] })
  ] });
}
export {
  Login as default
};
