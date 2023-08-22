import { j as jsx, F as Fragment, a as jsxs } from "../app.mjs";
import { useState } from "react";
import { L as LoggedIn } from "./ChangeNavbarComponent-62f4d9cc.mjs";
import { useForm, Head } from "@inertiajs/react";
import { T as TextInput, I as InputError } from "./TextInput-1dae6f47.mjs";
import { I as InputLabel } from "./InputLabel-26a85203.mjs";
import { U as UniversalButton } from "./UniversalButtonComponent-15f7658a.mjs";
import Datepicker from "react-tailwindcss-datepicker";
import "react/jsx-runtime";
import "lodash";
import "axios";
import "react-dom/client";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "@mui/icons-material/Settings.js";
const inputStyle = {
  maxWidth: "500px",
  width: "100%",
  margin: "0.5rem"
};
function InsertProject(props) {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11)
  });
  const handleValueChange = (newValue) => {
    setValue(newValue);
    data.startDate = newValue.startDate;
    data.endDate = newValue.endDate;
    console.log("newValue:", data.endDate);
  };
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    project_number: "",
    startDate: "",
    endDate: "",
    description: "",
    street: "",
    zip: "",
    city: "",
    country: ""
  });
  console.log(data);
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/insertProject", data).then(() => {
      console.log("lsaslcs");
      alert("User: " + JSON.stringify(data.name) + "wurde angelegt!");
    }).catch((error) => {
      console.log("ERROR:: ", error.response.data);
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex justify-center align-center p-12", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "name",
          value: "Projektname"
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "name",
          name: "name",
          value: data.name,
          className: "mt-1 block w-full",
          autoComplete: "name",
          isFocused: true,
          handleChange: onHandleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        InputError,
        {
          message: errors.name,
          className: "mt-2"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "project_number",
          value: "Projektnummer"
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "project_number",
          name: "project_number",
          value: data.project_number,
          className: "mt-1 block w-full",
          autoComplete: "project_number",
          handleChange: onHandleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        InputError,
        {
          message: errors.project_number,
          className: "mt-2"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "country",
          value: "Land"
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "country",
          name: "country",
          value: data.country,
          className: "mt-1 block w-full",
          autoComplete: "country",
          handleChange: onHandleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        InputError,
        {
          message: errors.country,
          className: "mt-2"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "zip",
          value: "Postleitzahl"
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "zip",
          name: "zip",
          value: data.zip,
          className: "mt-1 block w-full",
          autoComplete: "zip",
          handleChange: onHandleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.zip, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "city",
          value: "Ort"
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "city",
          name: "city",
          value: data.city,
          className: "mt-1 block w-full",
          autoComplete: "city",
          handleChange: onHandleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        InputError,
        {
          message: errors.city,
          className: "mt-2"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "street",
          value: "Straße"
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "street",
          name: "street",
          value: data.street,
          className: "mt-1 block w-full",
          autoComplete: "street",
          handleChange: onHandleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        InputError,
        {
          message: errors.street,
          className: "mt-2"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "datum",
          value: "Datum"
        }
      ),
      /* @__PURE__ */ jsx(
        Datepicker,
        {
          value,
          onChange: handleValueChange
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "beschreibung",
          value: "Beschreibung"
        }
      ),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          id: "description",
          name: "description",
          value: data.description,
          className: "mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm ",
          autoComplete: "description",
          onChange: onHandleChange,
          required: true,
          rows: 4
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center align-center p-5", children: [
      /* @__PURE__ */ jsx(
        UniversalButton,
        {
          type: "submit",
          href: "ProjectInsertPage",
          text: "Hinzufügen"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mx-2" }),
      /* @__PURE__ */ jsx(
        UniversalButton,
        {
          type: "button",
          href: "ProjectHome",
          text: "Zurück"
        }
      )
    ] })
  ] }) }) }) });
}
function projectInsertPage(props) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "ProjectInsertPage" }),
    /* @__PURE__ */ jsx(LoggedIn, { auth: props.auth }),
    /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("h1", { className: "max-w-7xl text-xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: "Projekte hinzufügen" }) }),
    /* @__PURE__ */ jsx(InsertProject, { name: props })
  ] });
}
export {
  projectInsertPage as default
};
