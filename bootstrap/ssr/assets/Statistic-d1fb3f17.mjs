import { j as jsx, a as jsxs } from "../app.mjs";
import { Head } from "@inertiajs/react";
import { L as LoggedIn } from "./ChangeNavbarComponent-9de9bf28.mjs";
import { useState, useEffect } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from "recharts";
import DatePicker from "react-datepicker";
/* empty css                            */import "react/jsx-runtime";
import "lodash";
import "axios";
import "react-dom/client";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "@mui/icons-material/Settings.js";
const cardStyle$2 = {
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  maxWidth: "90%",
  margin: "0 auto",
  padding: "20px",
  position: "relative",
  marginBottom: "15px",
  marginTop: "15px"
};
const cardTitleStyle$2 = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "center",
  color: "#333"
};
const chartContainerStyle$2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const ProjectsBarChartComponent = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getAllDataForMyProjects");
        const projects = await response.json();
        setData(
          projects.map((project) => {
            const startDate = new Date(project.startDate);
            const endDate = new Date(project.endDate);
            const days = (endDate - startDate) / (1e3 * 60 * 60 * 24) + 1;
            return {
              name: project.name,
              value: project.project_number,
              start: project.startDate,
              end: project.endDate,
              days
            };
          })
        );
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    fetchData();
  }, []);
  const CustomTick = ({ x, y, payload }) => {
    const maxLength = 15;
    const text = payload.value.length > maxLength ? payload.value.slice(0, maxLength) + "..." : payload.value;
    return /* @__PURE__ */ jsx("text", { x, y, dy: 16, textAnchor: "middle", fill: "#666", children: text });
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { style: cardStyle$2, children: [
    /* @__PURE__ */ jsx("h1", { style: cardTitleStyle$2, children: "Projekt Statistiken" }),
    /* @__PURE__ */ jsx("div", { style: chartContainerStyle$2, children: /* @__PURE__ */ jsxs(
      BarChart,
      {
        width: 1400,
        height: 300,
        data,
        margin: {
          top: 5,
          right: 30,
          left: 50,
          bottom: 50
        },
        children: [
          /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3" }),
          /* @__PURE__ */ jsx(XAxis, { dataKey: "name", tick: /* @__PURE__ */ jsx(CustomTick, {}) }),
          /* @__PURE__ */ jsx(YAxis, { dataKey: "days" }),
          /* @__PURE__ */ jsx(Tooltip, {}),
          /* @__PURE__ */ jsx(Legend, {}),
          /* @__PURE__ */ jsx(
            Bar,
            {
              dataKey: "days",
              fill: "#8884d8",
              barSize: 30,
              barGap: 200
            }
          )
        ]
      }
    ) })
  ] }) });
};
const ProjectsBarChartComponent$1 = ProjectsBarChartComponent;
const datePickerStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px"
};
const cardStyle$1 = {
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  maxWidth: "90%",
  margin: "0 auto",
  padding: "20px",
  position: "relative"
};
const cardTitleStyle$1 = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "center",
  color: "#333"
};
const chartContainerStyle$1 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const EmployeeProjectInfo = () => {
  const [employeeProjectData, setEmployeeProjectData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    const fetchEmployeeProjectData = async () => {
      try {
        const response = await fetch("/api/forMyPersonsStatistic");
        const myData = await response.json();
        setEmployeeProjectData(
          myData.map((myData2) => {
            const startDate = new Date(myData2.startDate);
            const endDate = new Date(myData2.endDate);
            const days = (endDate - startDate) / (1e3 * 60 * 60 * 24) + 1;
            const selectedYear = selectedDate.getFullYear();
            const selectedMonth = selectedDate.getMonth();
            const firstDayOfMonth = new Date(
              selectedYear,
              selectedMonth,
              1
            );
            const lastDayOfMonth = new Date(
              selectedYear,
              selectedMonth + 1,
              0
            );
            const start = startDate < firstDayOfMonth ? firstDayOfMonth : startDate;
            const end = endDate > lastDayOfMonth ? lastDayOfMonth : endDate;
            const currentMonthDays = endDate < firstDayOfMonth || startDate > lastDayOfMonth ? 0 : (end - start) / (1e3 * 60 * 60 * 24) + 1;
            const daysInCurrentMonth = new Date(
              selectedYear,
              selectedMonth + 1,
              0
            ).getDate();
            const currentMonthFree = daysInCurrentMonth - currentMonthDays;
            return {
              name: myData2.firstname,
              lastname: myData2.lastname,
              department: myData2.department,
              project_name: myData2.projectName,
              start: myData2.startDate,
              end: myData2.endDate,
              days,
              currentMonthDays,
              currentMonthFree
            };
          })
        );
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    fetchEmployeeProjectData();
  }, [selectedDate]);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  console.log(employeeProjectData);
  const hoursPerDay = 8;
  const aggregateEmployeeData = (employeeProjectData2) => {
    const aggregatedData = {};
    employeeProjectData2.forEach((employee) => {
      const department = employee.department;
      const name = employee.name + " " + employee.lastname;
      const currentMonthDays = employee.currentMonthDays;
      if (!aggregatedData[department]) {
        aggregatedData[department] = {
          department,
          employees: {},
          totalCurrentMonthHours: 0
        };
      }
      if (!aggregatedData[department].employees[name]) {
        aggregatedData[department].employees[name] = {
          name,
          currentMonthHours: 0
        };
      }
      aggregatedData[department].employees[name].currentMonthHours += currentMonthDays * hoursPerDay;
      aggregatedData[department].totalCurrentMonthHours += currentMonthDays * hoursPerDay;
    });
    const maxWorkDays = 22;
    Object.values(aggregatedData).forEach((dept) => {
      Object.values(dept.employees).forEach((employee) => {
        employee.currentMonthFreeHours = maxWorkDays * hoursPerDay - employee.currentMonthHours;
      });
      dept.totalCurrentMonthFreeHours = maxWorkDays * Object.keys(dept.employees).length * hoursPerDay - dept.totalCurrentMonthHours;
    });
    const departmentData2 = Object.values(aggregatedData);
    return departmentData2;
  };
  const departmentData = aggregateEmployeeData(employeeProjectData);
  const chartData = departmentData.map((dept) => ({
    department: dept.department,
    workHours: dept.totalCurrentMonthHours,
    freeHours: dept.totalCurrentMonthFreeHours
  }));
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { style: cardStyle$1, children: [
    /* @__PURE__ */ jsx("h1", { style: cardTitleStyle$1, children: "Arbeitstage und freie Tage für jedes Department" }),
    /* @__PURE__ */ jsx("div", { style: datePickerStyle, children: /* @__PURE__ */ jsx(
      DatePicker,
      {
        selected: selectedDate,
        onChange: handleDateChange,
        dateFormat: "MM/yyyy",
        showMonthYearPicker: true,
        inline: true,
        wrapperClassName: "datePickerWrapper"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { style: chartContainerStyle$1, children: /* @__PURE__ */ jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxs(
      BarChart,
      {
        data: chartData,
        margin: {
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        },
        children: [
          /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3" }),
          /* @__PURE__ */ jsx(XAxis, { dataKey: "department" }),
          /* @__PURE__ */ jsx(YAxis, {}),
          /* @__PURE__ */ jsx(Tooltip, {}),
          /* @__PURE__ */ jsx(Legend, {}),
          /* @__PURE__ */ jsx(Bar, { dataKey: "workHours", name: "Arbeitsstunden", fill: "#8884d8" }),
          /* @__PURE__ */ jsx(Bar, { dataKey: "freeHours", name: "Freie Stunden", fill: "#82ca9d" })
        ]
      }
    ) }) })
  ] }) });
};
const PersonsStatistic = EmployeeProjectInfo;
const cardStyle = {
  backgroundColor: "white",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  maxWidth: "90%",
  margin: "0 auto",
  marginTop: "10px",
  padding: "20px",
  position: "relative",
  marginBottom: "15px"
};
const cardTitleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
  textAlign: "center",
  color: "#333"
};
const chartContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
const DepartmentsStatistic = () => {
  const [departmentStatistic, setdepartmentStatistic] = useState([]);
  useEffect(() => {
    const fetchDepartmentData = async () => {
      try {
        const response = await fetch("/api/getAllDataFromPersons");
        const myData = await response.json();
        setdepartmentStatistic(myData);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    fetchDepartmentData();
  }, []);
  const countEmployeesByDepartment = (data) => {
    const departmentCounts2 = {};
    data.forEach((person) => {
      const department = person.department;
      if (departmentCounts2[department]) {
        departmentCounts2[department]++;
      } else {
        departmentCounts2[department] = 1;
      }
    });
    return departmentCounts2;
  };
  const departmentCounts = countEmployeesByDepartment(departmentStatistic);
  const chartData = Object.entries(departmentCounts).map(([department, personenAnzahl]) => ({
    department,
    personenAnzahl
  }));
  return /* @__PURE__ */ jsxs("div", { style: cardStyle, children: [
    /* @__PURE__ */ jsx("h1", { style: cardTitleStyle, children: "Personen pro Abteilung" }),
    /* @__PURE__ */ jsx("div", { style: chartContainerStyle, children: /* @__PURE__ */ jsxs(
      BarChart,
      {
        width: 1400,
        height: 300,
        data: chartData,
        margin: {
          top: 5,
          right: 30,
          left: 50,
          bottom: 50
        },
        children: [
          /* @__PURE__ */ jsx(CartesianGrid, { strokeDasharray: "3 3" }),
          /* @__PURE__ */ jsx(XAxis, { dataKey: "department" }),
          /* @__PURE__ */ jsx(YAxis, {}),
          /* @__PURE__ */ jsx(Tooltip, {}),
          /* @__PURE__ */ jsx(Legend, {}),
          /* @__PURE__ */ jsx(
            Bar,
            {
              dataKey: "personenAnzahl",
              fill: "#8ee5ee",
              barSize: 30,
              barGap: 200
            }
          )
        ]
      }
    ) })
  ] });
};
const DepartmentsStatistic$1 = DepartmentsStatistic;
function myprojects(props) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "Statistic" }),
    /* @__PURE__ */ jsx(LoggedIn, { auth: props.auth }),
    /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("h1", { className: "max-w-7xl text-xl mx-auto mb-1 py-6 px-4 sm:px-6 lg:px-8", children: "Statistiken" }) }),
    /* @__PURE__ */ jsx(PersonsStatistic, {}),
    /* @__PURE__ */ jsx(ProjectsBarChartComponent$1, {}),
    /* @__PURE__ */ jsx(DepartmentsStatistic$1, {})
  ] });
}
export {
  myprojects as default
};
