import { j as jsx, a as jsxs, F as Fragment } from "../app.mjs";
import { createContext, useState, useContext, Fragment as Fragment$1, useEffect } from "react";
import { Transition, Menu, Disclosure } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import SettingsIcon from "@mui/icons-material/Settings.js";
const firmenlogo = "/build/assets/firmenlogo-990067f4.png";
const DropDownContext = createContext();
const Dropdown = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen((previousState) => !previousState);
  };
  return /* @__PURE__ */ jsx(DropDownContext.Provider, { value: { open, setOpen, toggleOpen }, children: /* @__PURE__ */ jsx("div", { className: "relative", children }) });
};
const Trigger = ({ children }) => {
  const { open, setOpen, toggleOpen } = useContext(DropDownContext);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { onClick: toggleOpen, children }),
    open && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-40", onClick: () => setOpen(false) })
  ] });
};
const Content = ({ align = "right", width = "48", contentClasses = "py-1 bg-white", children }) => {
  const { open, setOpen } = useContext(DropDownContext);
  let alignmentClasses = "origin-top";
  if (align === "left") {
    alignmentClasses = "origin-top-left left-0";
  } else if (align === "right") {
    alignmentClasses = "origin-top-right right-0";
  }
  let widthClasses = "";
  if (width === "48") {
    widthClasses = "w-48";
  }
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Transition,
    {
      as: Fragment$1,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: `absolute z-50 mt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`,
          onClick: () => setOpen(false),
          children: /* @__PURE__ */ jsx("div", { className: `rounded-md ring-1 ring-black ring-opacity-5 ` + contentClasses, children })
        }
      )
    }
  ) });
};
const DropdownLink = ({ href, method, as, children }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      href,
      method,
      as,
      className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",
      children
    }
  );
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
const ProjectsDropdown$1 = () => {
  return /* @__PURE__ */ jsxs(Menu, { as: "div", className: "relative inline-block text-left", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Menu.Button, { className: "inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white", children: "Projekte" }) }),
    /* @__PURE__ */ jsx(Menu.Items, { className: "absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ jsxs("div", { className: "py-1", children: [
      /* @__PURE__ */ jsx(Menu.Item, { children: ({ active }) => /* @__PURE__ */ jsx(
        "a",
        {
          href: "ProjectHome",
          className: `${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`,
          children: "Projekte"
        }
      ) }),
      /* @__PURE__ */ jsx(Menu.Item, { children: ({ active }) => /* @__PURE__ */ jsx(
        "a",
        {
          href: "Statistic",
          className: `${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm relative z-100`,
          children: "Statistik"
        }
      ) }),
      /* @__PURE__ */ jsx(Menu.Item, { children: ({ active }) => /* @__PURE__ */ jsx(
        "a",
        {
          href: "ProjectNotes",
          className: `${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm relative z-100`,
          children: "Notizen"
        }
      ) })
    ] }) })
  ] });
};
const navigation$2 = [
  { name: "News", href: "NewsPage", current: false },
  { name: "Personaleinteilung", href: "Scheduler", current: false },
  { name: "Projekte", href: "ProjectHome", current: false }
];
function classNames$2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function MyNavbar$2({ myUser = NULL, header, children }) {
  return /* @__PURE__ */ jsx(Disclosure, { as: "nav", className: "bg-gray-800", children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden", children: /* @__PURE__ */ jsxs(Disclosure.Button, { className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", children: [
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
        open ? /* @__PURE__ */ jsx(
          XMarkIcon,
          {
            className: "block h-6 w-6",
            "aria-hidden": "true"
          }
        ) : /* @__PURE__ */ jsx(
          Bars3Icon,
          {
            className: "block h-6 w-6",
            "aria-hidden": "true"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-shrink-0 items-center", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "block h-8 w-auto lg:hidden",
              src: firmenlogo,
              alt: "Your Company"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "hidden h-8 w-auto lg:block",
              src: firmenlogo,
              alt: "Your Company"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:ml-6 sm:block", children: /* @__PURE__ */ jsx("div", { className: "flex space-x-4", children: navigation$2.map((item) => {
          if (item.name === "Projekte") {
            return /* @__PURE__ */ jsx(
              ProjectsDropdown$1,
              {},
              item.name
            );
          } else {
            return /* @__PURE__ */ jsx(
              "a",
              {
                href: item.href,
                className: classNames$2(
                  item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "px-3 py-2 rounded-md text-sm font-medium"
                ),
                "aria-current": item.current ? "page" : void 0,
                children: item.name
              },
              item.name
            );
          }
        }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0", children: /* @__PURE__ */ jsx("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
        /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
            children: [
              myUser,
              /* @__PURE__ */ jsx(SettingsIcon, {})
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
          /* @__PURE__ */ jsx(
            Dropdown.Link,
            {
              href: route("profile.edit"),
              children: "Profile"
            }
          ),
          /* @__PURE__ */ jsx(
            Dropdown.Link,
            {
              href: route("logout"),
              method: "post",
              as: "button",
              children: "Log Out"
            }
          )
        ] })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(Disclosure.Panel, { className: "sm:hidden", children: /* @__PURE__ */ jsx("div", { className: "space-y-1 px-2 pt-2 pb-3", children: navigation$2.map((item) => /* @__PURE__ */ jsx(
      Disclosure.Button,
      {
        as: "a",
        href: item.href,
        className: classNames$2(
          item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "block px-3 py-2 rounded-md text-base font-medium"
        ),
        "aria-current": item.current ? "page" : void 0,
        children: item.name
      },
      item.name
    )) }) })
  ] }) });
}
const navigation$1 = [
  { name: "News", href: "NewsPage", current: false },
  { name: "Personaleinteilung", href: "Scheduler", current: false },
  { name: "Projekte", href: "ProjectHome", current: false },
  { name: "Admin", href: "AdminHome", current: false }
];
function classNames$1(...classes) {
  return classes.filter(Boolean).join(" ");
}
function MyNavbar$1({ myUser = NULL, header, children }) {
  return /* @__PURE__ */ jsx(Disclosure, { as: "nav", className: "bg-gray-800 z-1000", children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden", children: /* @__PURE__ */ jsxs(Disclosure.Button, { className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", children: [
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
        open ? /* @__PURE__ */ jsx(
          XMarkIcon,
          {
            className: "block h-6 w-6",
            "aria-hidden": "true"
          }
        ) : /* @__PURE__ */ jsx(
          Bars3Icon,
          {
            className: "block h-6 w-6",
            "aria-hidden": "true"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-shrink-0 items-center", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "block h-8 w-auto lg:hidden",
              src: firmenlogo,
              alt: "Your Company"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "hidden h-8 w-auto lg:block",
              src: firmenlogo,
              alt: "Your Company"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:ml-6 sm:block", children: /* @__PURE__ */ jsx("div", { className: "flex space-x-4", children: navigation$1.map((item) => {
          if (item.name === "Projekte") {
            return /* @__PURE__ */ jsx(
              ProjectsDropdown$1,
              {},
              item.name
            );
          } else {
            return /* @__PURE__ */ jsx(
              "a",
              {
                href: item.href,
                className: classNames$1(
                  item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "px-3 py-2 rounded-md text-sm font-medium"
                ),
                "aria-current": item.current ? "page" : void 0,
                children: item.name
              },
              item.name
            );
          }
        }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0", children: /* @__PURE__ */ jsx("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
        /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
            children: [
              myUser,
              /* @__PURE__ */ jsx(SettingsIcon, {})
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
          /* @__PURE__ */ jsx(
            Dropdown.Link,
            {
              href: route("profile.edit"),
              children: "Profile"
            }
          ),
          /* @__PURE__ */ jsx(
            Dropdown.Link,
            {
              href: route("logout"),
              method: "post",
              as: "button",
              children: "Log Out"
            }
          )
        ] })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(Disclosure.Panel, { className: "sm:hidden", children: /* @__PURE__ */ jsx("div", { className: "space-y-1 px-2 pt-2 pb-3", children: navigation$1.map((item) => /* @__PURE__ */ jsx(
      Disclosure.Button,
      {
        as: "a",
        href: item.href,
        className: classNames$1(
          item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "block px-3 py-2 rounded-md text-base font-medium"
        ),
        "aria-current": item.current ? "page" : void 0,
        children: item.name
      },
      item.name
    )) }) })
  ] }) });
}
const ProjectsDropdown = () => {
  return /* @__PURE__ */ jsxs(Menu, { as: "div", className: "relative inline-block text-left", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Menu.Button, { className: "inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white", children: "Projekte" }) }),
    /* @__PURE__ */ jsx(Menu.Items, { className: "absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ jsxs("div", { className: "py-1", children: [
      /* @__PURE__ */ jsx(Menu.Item, { children: ({ active }) => /* @__PURE__ */ jsx(
        "a",
        {
          href: "Statistic",
          className: `${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm relative z-100`,
          children: "Statistik"
        }
      ) }),
      /* @__PURE__ */ jsx(Menu.Item, { children: ({ active }) => /* @__PURE__ */ jsx(
        "a",
        {
          href: "ProjectNotes",
          className: `${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm relative z-100`,
          children: "Notizen"
        }
      ) })
    ] }) })
  ] });
};
const navigation = [
  { name: "News", href: "NewsPage", current: false },
  { name: "Personaleinteilung", href: "Scheduler", current: false },
  { name: "Projekte", href: "ProjectNotes", current: false }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function MyNavbar({ myUser = NULL, header, children }) {
  return /* @__PURE__ */ jsx(Disclosure, { as: "nav", className: "bg-gray-800", children: ({ open }) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "relative flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden", children: /* @__PURE__ */ jsxs(Disclosure.Button, { className: "inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", children: [
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
        open ? /* @__PURE__ */ jsx(
          XMarkIcon,
          {
            className: "block h-6 w-6",
            "aria-hidden": "true"
          }
        ) : /* @__PURE__ */ jsx(
          Bars3Icon,
          {
            className: "block h-6 w-6",
            "aria-hidden": "true"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-1 items-center justify-center sm:items-stretch sm:justify-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-shrink-0 items-center", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "block h-8 w-auto lg:hidden",
              src: firmenlogo,
              alt: "Your Company"
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "hidden h-8 w-auto lg:block",
              src: firmenlogo,
              alt: "Your Company"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden sm:ml-6 sm:block", children: /* @__PURE__ */ jsx("div", { className: "flex space-x-4", children: navigation.map((item) => {
          if (item.name === "Projekte") {
            return /* @__PURE__ */ jsx(
              ProjectsDropdown,
              {},
              item.name
            );
          } else {
            return /* @__PURE__ */ jsx(
              "a",
              {
                href: item.href,
                className: classNames(
                  item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "px-3 py-2 rounded-md text-sm font-medium"
                ),
                "aria-current": item.current ? "page" : void 0,
                children: item.name
              },
              item.name
            );
          }
        }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0", children: /* @__PURE__ */ jsx("div", { className: "ml-3 relative", children: /* @__PURE__ */ jsxs(Dropdown, { children: [
        /* @__PURE__ */ jsx(Dropdown.Trigger, { children: /* @__PURE__ */ jsx("span", { className: "inline-flex rounded-md", children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
            children: [
              myUser,
              /* @__PURE__ */ jsx(SettingsIcon, {})
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsxs(Dropdown.Content, { children: [
          /* @__PURE__ */ jsx(
            Dropdown.Link,
            {
              href: route("profile.edit"),
              children: "Profile"
            }
          ),
          /* @__PURE__ */ jsx(
            Dropdown.Link,
            {
              href: route("logout"),
              method: "post",
              as: "button",
              children: "Log Out"
            }
          )
        ] })
      ] }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(Disclosure.Panel, { className: "sm:hidden", children: /* @__PURE__ */ jsx("div", { className: "space-y-1 px-2 pt-2 pb-3", children: navigation.map((item) => /* @__PURE__ */ jsx(
      Disclosure.Button,
      {
        as: "a",
        href: item.href,
        className: classNames(
          item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
          "block px-3 py-2 rounded-md text-base font-medium"
        ),
        "aria-current": item.current ? "page" : void 0,
        children: item.name
      },
      item.name
    )) }) })
  ] }) });
}
const LoggedIn = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const currentUser = props.auth.user.role;
    setUser(currentUser);
  }, []);
  if (user == 1) {
    return /* @__PURE__ */ jsx(MyNavbar$1, { myUser: props.auth.user.name });
  } else if (user == 2) {
    return /* @__PURE__ */ jsx(MyNavbar$2, { myUser: props.auth.user.name });
  } else {
    return /* @__PURE__ */ jsx(MyNavbar, { myUser: props.auth.user.name });
  }
};
const LoggedIn$1 = LoggedIn;
export {
  LoggedIn$1 as L
};
