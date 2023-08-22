import { j as jsx, F as Fragment, a as jsxs } from "../app.mjs";
import { useState, useEffect } from "react";
import { L as LoggedIn } from "./ChangeNavbarComponent-62f4d9cc.mjs";
import { useForm, Head } from "@inertiajs/react";
import { T as TextInput, I as InputError } from "./TextInput-1dae6f47.mjs";
import { I as InputLabel } from "./InputLabel-26a85203.mjs";
import { U as UniversalButton } from "./UniversalButtonComponent-15f7658a.mjs";
import { D as DropdownForm } from "./DropdownForm-972af85d.mjs";
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
function AdminUpdate(props) {
  const [result, setResult] = useState("");
  let myVar;
  const [loading, setLoading] = useState(true);
  const urlSearchParams = new URLSearchParams(window.location.search);
  myVar = urlSearchParams.get("id");
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    firstname: "",
    lastname: "",
    department: "",
    TelNr1: "",
    TelNr2: "",
    rank: "",
    country: "",
    zip: "",
    city: "",
    street: "",
    role: ""
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`/api/editUser`, {
          id: myVar
        });
        setResult(response.data);
        console.log();
        console.log();
        setData({
          id: myVar,
          name: response.data.user.name,
          email: response.data.user.email,
          role: response.data.user.role,
          firstname: response.data.persons.firstname,
          lastname: response.data.persons.lastname,
          department: response.data.persons.department,
          TelNr1: response.data.persons.TelNr1,
          TelNr2: response.data.persons.TelNr2,
          rank: response.data.persons.rank,
          personAddress_id: response.data.persons.personAddress_id,
          country: response.data.address.country,
          zip: response.data.address.ZIP,
          city: response.data.address.city,
          street: response.data.address.street
        });
      } catch (error) {
        console.error("Fehler beim Laden der Daten:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [myVar]);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/api/updateUser", data).then(() => {
      alert(`Benutzer ${data.name} wurde erfolgreich edititert.`);
      window.location.href = "AdminHome";
    }).catch((error) => {
      console.log("ERROR:: ", error.response.data);
      alert(`Es wurden nicht alle Felder ausgefüllt`);
    });
  };
  const handleChange = (event) => {
    setData(event.target.name, event.target.value);
  };
  if (loading) {
    return /* @__PURE__ */ jsx("div", { children: "Laden..." });
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "flex justify-center align-center p-12", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "name",
          value: "Username"
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
          handleChange,
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
          forInput: "email",
          value: "Email"
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          autoComplete: "username",
          handleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        InputError,
        {
          message: errors.email,
          className: "mt-2"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "firstname",
          value: "Vorname"
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "firstname",
          name: "firstname",
          value: data.firstname,
          className: "mt-1 block w-full",
          autoComplete: "firstname",
          isFocused: true,
          handleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        InputError,
        {
          message: errors.firstname,
          className: "mt-2"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "lastname",
          value: "Nachname"
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "lastname",
          name: "lastname",
          value: data.lastname,
          className: "mt-1 block w-full",
          autoComplete: "lastname",
          handleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        InputError,
        {
          message: errors.lastname,
          className: "mt-2"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "department",
          value: "Abteilung"
        }
      ),
      /* @__PURE__ */ jsx(
        DropdownForm,
        {
          projects: props.name.department,
          onHandleChange: handleChange,
          value: data.department,
          id: data.department,
          name: "department",
          autoComplete: "department"
        }
      ),
      /* @__PURE__ */ jsx(
        InputError,
        {
          message: errors.department,
          className: "mt-2"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "TelNr1",
          value: "Telefonnummer 1"
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "TelNr1",
          name: "TelNr1",
          value: data.TelNr1,
          className: "mt-1 block w-full",
          autoComplete: "TelNr1",
          handleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        InputError,
        {
          message: errors.TelNr1,
          className: "mt-2"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "TelNr2",
          value: "Telefonnummer 2"
        }
      ),
      /* @__PURE__ */ jsx(
        TextInput,
        {
          id: "TelNr2",
          name: "TelNr2",
          value: data.TelNr2,
          className: "mt-1 block w-full",
          autoComplete: "TelNr2",
          handleChange,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        InputError,
        {
          message: errors.TelNr2,
          className: "mt-2"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { style: inputStyle, children: [
      /* @__PURE__ */ jsx(
        InputLabel,
        {
          className: "mt-4",
          forInput: "role",
          value: "Role"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative mt-1", children: [
        /* @__PURE__ */ jsxs(
          "select",
          {
            id: "role",
            name: "role",
            value: data.role,
            onChange: handleChange,
            className: "block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
            required: true,
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Select a role" }),
              /* @__PURE__ */ jsx("option", { value: "1", children: "Admin" }),
              /* @__PURE__ */ jsx("option", { value: "2", children: "Manager" }),
              /* @__PURE__ */ jsx("option", { value: "3", children: "Mitarbeiter" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700", children: /* @__PURE__ */ jsx(
          "svg",
          {
            className: "fill-current h-4 w-4",
            viewBox: "0 0 20 20",
            children: /* @__PURE__ */ jsx("path", { d: "M10 12l-6-6h12l-6 6z" })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(
        InputError,
        {
          message: errors.role,
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
          value: "Country"
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
          handleChange,
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
          handleChange,
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
          value: "City"
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
          handleChange,
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
          value: "Street"
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
          handleChange,
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
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center align-center p-5", children: [
      /* @__PURE__ */ jsx(
        UniversalButton,
        {
          type: "submit",
          text: "Update"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mx-2" }),
      /* @__PURE__ */ jsx(
        UniversalButton,
        {
          type: "button",
          href: "AdminHome",
          text: "Zurück"
        }
      )
    ] })
  ] }) }) }) });
}
function adminInsertPage(props) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "AdminUpdatePage" }),
    /* @__PURE__ */ jsx(LoggedIn, { auth: props.auth }),
    /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("h1", { className: "max-w-7xl text-xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: "Mitarbeiter bearbeiten" }) }),
    /* @__PURE__ */ jsx(AdminUpdate, { name: props })
  ] });
}
export {
  adminInsertPage as default
};
