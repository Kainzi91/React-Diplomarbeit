import { j as jsx, a as jsxs } from "../app.mjs";
import "react";
import { L as LoggedIn } from "./ChangeNavbarComponent-7297efef.mjs";
import { Head } from "@inertiajs/react";
import "react/jsx-runtime";
import "lodash";
import "axios";
import "react-dom/client";
import "@headlessui/react";
import "@heroicons/react/24/outline";
import "@mui/icons-material/Settings.js";
const NewsPage = () => {
  const newsItems = [
    {
      title: "Unsere Stars....",
      image: "https://www.wiet.at/wp-content/uploads/2022/12/0C1A8558.jpg",
      text: "Mario, Alexander und Dominik haben im Projektmanagement hervorragende Arbeit geleistet. Durch ihre umsichtige Planung und koordinierte Umsetzung konnten die Projektziele fristgerecht erreicht werden. Sie haben alle relevanten Stakeholder stets informiert und ein offenes Ohr für alle Fragen und Anliegen gehabt. Auch in stressigen Phasen haben sie stets einen kühlen Kopf bewahrt und Lösungen gefunden, um Herausforderungen zu meistern. Insgesamt haben sie damit wesentlich zum Erfolg des Projekts beigetragen."
    },
    {
      title: "Automatisierung....",
      image: "https://www.wiet.at/wp-content/uploads/2019/02/anlagentechnik.png",
      text: "Mario, Alexander und Dominik haben in der Automatisierungstechnik eine hervorragende Arbeit geleistet. Sie haben das Automatisierungssystem unseres Kunden von Grund auf konzipiert und erfolgreich implementiert. Dabei haben sie eine maßgeschneiderte Lösung entwickelt, die genau auf die Bedürfnisse des Kunden zugeschnitten war. Sie haben innovative Ideen eingebracht und technische Herausforderungen mit Geschick gemeistert. Dank ihres umfassenden Fachwissens und ihrer Erfahrung in der Automatisierungstechnik konnte das Projekt erfolgreich abgeschlossen werden. Mario, Alexander und Dominik haben damit wesentlich zur Optimierung der Produktionsprozesse beigetragen und dem Kunden einen klaren Wettbewerbsvorteil verschafft."
    },
    {
      title: "Gebäudetechnik....",
      image: "https://www.wiet.at/wp-content/uploads/2019/02/gebaeudetechnik.png",
      text: "Mario, Alexander und Dominik haben in der Gebäudetechnik eine exzellente Arbeit geleistet. Sie haben ein komplexes Gebäudetechnikprojekt geplant, koordiniert und umgesetzt. Dabei haben sie alle relevanten Anforderungen und Vorgaben berücksichtigt und eine innovative, effiziente und nachhaltige Lösung entwickelt. Sie haben die Schnittstelle zwischen den verschiedenen Gewerken erfolgreich koordiniert und so einen reibungslosen Projektablauf gewährleistet. Durch ihr fundiertes Fachwissen und ihre langjährige Erfahrung konnten sie auch unvorhergesehene Probleme schnell und effektiv lösen. Mario, Alexander und Dominik haben damit einen erheblichen Beitrag zur Modernisierung des Gebäudes geleistet und den Nutzern eine komfortable, energieeffiziente und sichere Umgebung geschaffen."
    },
    {
      title: "Kältetechnik....",
      image: "https://www.wiet.at/wp-content/uploads/2019/02/kaeltetechnik.png",
      text: "Mario, Alexander und Dominik haben bei einem Kunden eine hervorragende Arbeit in der Kältetechnik geleistet. Sie haben eine Kältetechnikanlage geplant, installiert und in Betrieb genommen, die den hohen Anforderungen des Kunden vollumfänglich gerecht wurde. Dabei haben sie die spezifischen Anforderungen der Branche und des Kunden berücksichtigt und eine innovative und zuverlässige Lösung entwickelt. Sie haben die Anlage sorgfältig und effizient installiert, in Betrieb genommen und kontinuierlich überwacht, um eine optimale Leistung und Energieeffizienz sicherzustellen. Dank ihrer Expertise und Erfahrung konnten Mario, Alexander und Dominik auch bei der Instandhaltung und Wartung der Anlage einen herausragenden Service bieten. Sie haben damit wesentlich zur Zufriedenheit des Kunden und zur Steigerung seiner Produktivität beigetragen."
    }
  ];
  const numberOfCols = 2;
  const gridTemplateColumns = `repeat(${numberOfCols}, minmax(0, 1fr))`;
  return /* @__PURE__ */ jsx("div", { className: "bg-gray-100 min-h-screen py-8 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-8 text-blue-900", children: "Was gibt es neues....." }),
    /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1 gap-8 sm:grid-cols-${numberOfCols} sm:gap-6`, style: { gridTemplateColumns }, children: newsItems.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white shadow-lg rounded-lg overflow-hidden news-item", children: [
      /* @__PURE__ */ jsx("img", { src: item.image, alt: item.title, className: "w-full h-48 object-contain news-item-image" }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4 text-blue-900", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-700", children: item.text })
      ] })
    ] }, index)) })
  ] }) });
};
const NewsComponent = NewsPage;
function news(props) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Head, { title: "News" }),
    /* @__PURE__ */ jsx(LoggedIn, { auth: props.auth }),
    /* @__PURE__ */ jsx("header", { className: "bg-white shadow", children: /* @__PURE__ */ jsx("h1", { className: "max-w-7xl text-xl mx-auto py-6 px-4 sm:px-6 lg:px-8", children: "News" }) }),
    /* @__PURE__ */ jsx(NewsComponent, {})
  ] });
}
export {
  news as default
};
