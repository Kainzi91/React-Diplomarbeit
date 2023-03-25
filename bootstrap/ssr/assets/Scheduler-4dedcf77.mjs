import { j as jsx, F as Fragment, a as jsxs } from "../app.mjs";
import { L as LoggedIn } from "./ChangeNavbarComponent-c012f99c.mjs";
import { useForm, Head } from "@inertiajs/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
/* empty css                            */import { Popover } from "@headlessui/react";
import Exit from "@mui/icons-material/DisabledByDefault.js";
import { D as DropdownForm } from "./DropdownForm-c803ed22.mjs";
import { T as TextInput, I as InputError } from "./TextInput-1dae6f47.mjs";
import { I as InputLabel } from "./InputLabel-26a85203.mjs";
import { U as UniversalButton } from "./UniversalButtonComponent-15f7658a.mjs";
import Datepicker from "react-tailwindcss-datepicker";
import "react/jsx-runtime";
import "lodash";
import "axios";
import "react-dom/client";
import "@heroicons/react/24/outline";
import "@mui/icons-material/Settings.js";
const SplittMonthFunction = (project, projectParts) => {
  const startDate = new Date(project.start);
  const endDate = new Date(project.end);
  let currentStart = startDate;
  while (currentStart < endDate) {
    const endOfMonth = new Date(
      currentStart.getFullYear(),
      currentStart.getMonth() + 1,
      0
    );
    const currentEnd = endDate > endOfMonth ? endOfMonth : endDate;
    const projectPart = {
      ...project,
      start: currentStart.toISOString(),
      end: currentEnd.toISOString(),
      entryNumber: project.entryNumber
    };
    projectParts.push(projectPart);
    const startOfNextMonth = new Date(
      endOfMonth.getFullYear(),
      endOfMonth.getMonth() + 1,
      1
    );
    currentStart = startOfNextMonth;
  }
};
const addToPersons = (data, persons) => {
  data.forEach((item) => {
    const person = persons.find((p) => p.id === item.id);
    if (person) {
      const unavailable = {
        start: item.start,
        end: item.end,
        project: item.project,
        entryNumber: item.entryNumber
      };
      let seperate = [];
      SplittMonthFunction(unavailable, seperate);
      for (let index = 0; index < seperate.length; index++) {
        person.unavailable.push(seperate[index]);
      }
    } else {
      let seperate = [];
      const unavailable = {
        start: item.start,
        end: item.end,
        project: item.project,
        entryNumber: item.entryNumber
      };
      SplittMonthFunction(unavailable, seperate);
      persons.push({
        id: item.id,
        name: item.name,
        lastname: item.lastname,
        unavailable: seperate
      });
    }
  });
};
const inputStyle$1 = {
  width: "500px"
};
function ProjectUpdateComponent$1(props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    staffingid: props.staffingid,
    firstname: props.firstname,
    lastname: props.lastname,
    projectName: props.projectName,
    startDate: props.startDate,
    endDate: props.endDate,
    description: ""
  });
  console.log(data);
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
    console.log(data.projectName);
  };
  const [value, setValue] = useState({
    startDate: props.startDate,
    endDate: props.endDate
  });
  const handleValueChange = (newValue) => {
    setValue(newValue);
    data.startDate = newValue.startDate;
    data.endDate = newValue.endDate;
  };
  const handleUpdate = (event) => {
    event.preventDefault();
    axios.post("/api/updateStaffing", data).then(() => {
      window.location.href = "Scheduler";
    }).catch((error) => {
    });
  };
  const handleDelete = (event) => {
    event.preventDefault();
    axios.post("/api/deleteStaffing", props).then(() => {
      window.location.href = "Scheduler";
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center align-center p-12", children: /* @__PURE__ */ jsxs("form", { children: [
      /* @__PURE__ */ jsxs("div", { style: inputStyle$1, children: [
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
            value: props.firstname,
            className: "mt-1 block w-full",
            autoComplete: "firstname",
            handleChange: onHandleChange,
            locked: true
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
      /* @__PURE__ */ jsxs("div", { style: inputStyle$1, children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            className: "mt-4",
            forInput: "lastname",
            value: "Zuname"
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "lastname",
            name: "lastname",
            value: props.lastname,
            className: "mt-1 block w-full",
            autoComplete: "lastname",
            handleChange: onHandleChange,
            locked: true
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
      /* @__PURE__ */ jsxs("div", { style: inputStyle$1, children: [
        /* @__PURE__ */ jsx(
          InputLabel,
          {
            className: "mt-4",
            forInput: "lastname",
            value: "Projektname"
          }
        ),
        /* @__PURE__ */ jsx(
          DropdownForm,
          {
            projects: props.projects,
            onHandleChange,
            value: props.projectName,
            id: "projectName",
            name: "projectName",
            autoComplete: "projectName"
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
      /* @__PURE__ */ jsxs("div", { style: inputStyle$1, children: [
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
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center align-center", children: [
      /* @__PURE__ */ jsx("form", { onSubmit: handleUpdate, children: /* @__PURE__ */ jsx(
        UniversalButton,
        {
          type: "submit",
          text: "Update"
        }
      ) }),
      /* @__PURE__ */ jsx("form", { onSubmit: handleDelete, children: /* @__PURE__ */ jsx(
        UniversalButton,
        {
          type: "submit",
          text: "Delete"
        }
      ) })
    ] })
  ] }) });
}
const inputStyle = {
  width: "500px"
};
function ProjectUpdateComponent(props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    personid: props.personid,
    firstname: props.firstname,
    lastname: props.lastname,
    projectName: "",
    startDate: "",
    endDate: "",
    description: ""
  });
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
    console.log(data);
  };
  const [value, setValue] = useState({
    startDate: props.startDate,
    endDate: props.endDate
  });
  const handleValueChange = (newValue) => {
    setValue(newValue);
    data.startDate = newValue.startDate;
    data.endDate = newValue.endDate;
    console.log("newValue:", data.endDate);
  };
  const handleInsert = (event) => {
    event.preventDefault();
    axios.post("/api/insertStaffing", data).then(() => {
      window.location.href = "Scheduler";
    }).catch((error) => {
      console.log(data.projectName);
    });
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "flex justify-center align-center p-12", children: /* @__PURE__ */ jsxs("form", { children: [
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
            value: props.firstname,
            className: "mt-1 block w-full",
            autoComplete: "firstname",
            handleChange: onHandleChange,
            locked: true
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
            value: "Zuname"
          }
        ),
        /* @__PURE__ */ jsx(
          TextInput,
          {
            id: "lastname",
            name: "lastname",
            value: props.lastname,
            className: "mt-1 block w-full",
            autoComplete: "lastname",
            handleChange: onHandleChange,
            locked: true
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
            forInput: "lastname",
            value: "Projektname"
          }
        ),
        /* @__PURE__ */ jsx(
          DropdownForm,
          {
            projects: props.projects,
            onHandleChange,
            value: props.projects,
            id: "projectName",
            name: "projectName",
            autoComplete: "projectName"
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
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center align-center", children: /* @__PURE__ */ jsx("form", { onSubmit: handleInsert, children: /* @__PURE__ */ jsx(
      UniversalButton,
      {
        type: "submit",
        text: "Hinzufügen"
      }
    ) }) })
  ] }) });
}
const tableWrapperStyles = {
  overflowX: "auto",
  overflowY: "auto",
  maxHeight: "80vh",
  maxWidth: "100%",
  flexGrow: 1
};
const containerStyles = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: "1rem",
  margin: "70px 20px 20px 20px"
};
const stickyColumnStyles = {
  position: "sticky",
  left: -1,
  background: "rgb(31 41 55)",
  zIndex: 10,
  boxShadow: "2px 0px 4px rgba(0, 0, 0, 0.1)",
  borderRight: "1px solid #dee2e6",
  borderLeft: "1px solid #dee2e6",
  backgroundColor: "rgb(31 41 55)"
};
const datePickerWrapperStyles = {
  zIndex: 11
  // Set this to a higher value than the zIndex in stickyColumnStyles
};
function SchedulerComponent(data) {
  const [month, setMonth] = useState(new Date());
  const daysInMonth = new Date(
    month.getFullYear(),
    month.getMonth() + 1,
    0
  ).getDate();
  const renderDays = () => {
    const days = [];
    const weekdays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
    const months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(month.getFullYear(), month.getMonth(), i);
      const weekday = weekdays[date.getDay()];
      const monthname = months[month.getMonth()];
      const dayname = weekday + ", " + i.toString().padStart(2, "0") + "." + monthname;
      days.push(
        /* @__PURE__ */ jsx(
          "th",
          {
            scope: "col",
            className: "border px-3 py-2 bg-gray-800 color text-gray-300 text-sm",
            children: dayname
          },
          i
        )
      );
    }
    return days;
  };
  const persons = [];
  const renderPersons = () => {
    addToPersons(data.data, persons);
    return persons.map((person, index) => {
      const personProjects = [];
      person.unavailable.forEach(({ start, end, project, entryNumber }) => {
        const start_Date = new Date(start);
        const end_Date = new Date(end);
        if (start_Date.getFullYear() === month.getFullYear() && start_Date.getMonth() === month.getMonth() && end_Date.getFullYear() === month.getFullYear() && end_Date.getMonth() === month.getMonth()) {
          personProjects.push({
            project,
            start: start_Date.getDate() - 1,
            end: end_Date.getDate() - 1,
            start_Date: start,
            end_Date: end,
            entryNumber
            // end_Date: : end_Date,
          });
        }
      });
      const personCells = [];
      let currentIndex = 0;
      personProjects.forEach(({ project, start, end, start_Date, end_Date, entryNumber }) => {
        if (currentIndex < start) {
          personCells.push(
            /* @__PURE__ */ jsx(
              "td",
              {
                colSpan: start - currentIndex,
                className: "border px-3 py-2"
              },
              `gap-${currentIndex}`
            )
          );
        }
        personCells.push(
          /* @__PURE__ */ jsx(
            "td",
            {
              colSpan: end - start + 1,
              className: `border px-3 py-2 bg-red-200`,
              children: /* @__PURE__ */ jsxs(Popover, { className: "relative", children: [
                /* @__PURE__ */ jsx(Popover.Button, { children: `Project ${project}` }),
                /* @__PURE__ */ jsx(Popover.Panel, { className: "fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-400 rounded-lg", children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-gray-400 rounded-lg mt-2 mr-2", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
                    /* @__PURE__ */ jsx("div", { className: "flex-grow text-center", children: /* @__PURE__ */ jsx("h1", { children: "Projekt Einteilung" }) }),
                    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
                      "a",
                      {
                        className: "text-black-500 hover:text-black-700",
                        href: `Scheduler`,
                        children: /* @__PURE__ */ jsx(Exit, {})
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ProjectUpdateComponent$1,
                    {
                      firstname: person.name,
                      lastname: person.lastname,
                      projectName: project,
                      startDate: start_Date,
                      endDate: end_Date,
                      start,
                      end,
                      month: month.getMonth() + 1,
                      staffingid: entryNumber,
                      projects: data.projects
                    }
                  )
                ] }) })
              ] })
            },
            `${person.name}-${project}-${start}-${end}-${entryNumber}}`
          )
        );
        currentIndex = end + 1;
      });
      if (currentIndex < daysInMonth) {
        personCells.push(
          /* @__PURE__ */ jsx(
            "td",
            {
              colSpan: daysInMonth - currentIndex,
              className: "border px-4 py-2"
            },
            `gap-${currentIndex}`
          )
        );
      }
      return /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx("td", { className: "border px-3 py-2 bg-gray-800 color text-gray-300 text-m ", style: stickyColumnStyles, children: /* @__PURE__ */ jsxs(Popover, { className: "relative", children: [
          /* @__PURE__ */ jsxs(Popover.Button, { children: [
            person.name,
            /* @__PURE__ */ jsx("br", {}),
            person.lastname
          ] }),
          /* @__PURE__ */ jsx(Popover.Panel, { className: "fixed z-50 top-0 left-0 w-screen h-screen text-black flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-400 rounded-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-gray-400 rounded-lg mt-2 mr-2", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
              /* @__PURE__ */ jsx("div", { className: "flex-grow text-center", children: /* @__PURE__ */ jsx("h1", { children: "Projekt Einteilung" }) }),
              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(
                "a",
                {
                  className: "text-black-500 hover:text-black-700",
                  href: `Scheduler`,
                  children: /* @__PURE__ */ jsx(Exit, {})
                }
              ) })
            ] }) }),
            /* @__PURE__ */ jsx(
              ProjectUpdateComponent,
              {
                personid: person.id,
                firstname: person.name,
                lastname: person.lastname,
                projects: data.projects
              }
            )
          ] }) })
        ] }) }),
        personCells
      ] }, index);
    });
  };
  return /* @__PURE__ */ jsxs("div", { style: containerStyles, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "flex justify-center mb-4 w-auto",
        style: datePickerWrapperStyles,
        children: /* @__PURE__ */ jsx(
          DatePicker,
          {
            selected: month,
            onChange: (date) => setMonth(date),
            dateFormat: "MMMM yyyy",
            showMonthYearPicker: true
          }
        )
      }
    ),
    /* @__PURE__ */ jsx("div", { style: tableWrapperStyles, children: /* @__PURE__ */ jsxs("table", { className: "table-auto border-collapse border border-blue-800 w-full", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
        /* @__PURE__ */ jsx(
          "th",
          {
            className: "border px-4 py-2 bg-gray-800 text-gray-300",
            style: stickyColumnStyles,
            children: "Mitarbeiter"
          }
        ),
        renderDays()
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { children: renderPersons() })
    ] }) })
  ] });
}
function Scheduler(props) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "Scheduler" }),
    /* @__PURE__ */ jsx(LoggedIn, { auth: props.auth }),
    /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto  text-xl py-6 px-4 sm:px-6 lg:px-8", children: "Personaleinteilung" }) }),
    /* @__PURE__ */ jsx(SchedulerComponent, { data: props.data, projects: props.projects })
  ] });
}
export {
  Scheduler as default
};
