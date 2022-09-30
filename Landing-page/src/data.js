//assets

import OpenMenu from "./images/icon-arrow-up.svg";
import CloseMenu from "./images/icon-arrow-down.svg";
import IconPlan from "./images/icon-planning.svg";
import IconCalender from "./images/icon-calendar.svg";
import IconReminders from "./images/icon-reminders.svg";
import IconTodo from "./images/icon-todo.svg";
import Audiophile from "./images/client-audiophile.svg";
import Maker from "./images/client-maker.svg";
import Meet from "./images/client-meet.svg";
import Databiz from "./images/client-databiz.svg";

export const menu = [
  {
    title: "Features",
    openMenuIcon: OpenMenu,
    closeMenuIcon: CloseMenu,
    submenu: [
      {
        title: "Todo List",
        icon: IconTodo,
      },
      {
        title: "Calenders",
        icon: IconCalender,
      },
      {
        title: "Reminders",
        icon: IconReminders,
      },
      {
        title: "Planning",
        icon: IconPlan,
      },
    ],
  },
  {
    title: "Company",
    openMenuIcon: OpenMenu,
    closeMenuIcon: CloseMenu,
    submenu: [
      {
        title: "History",
      },
      {
        title: "Our Team",
      },
      {
        title: "Blog",
      },
    ],
  },
  {
    title: "Careers",
  },
  {
    title: "About",
  },
  {
    title: "Login",
  },
  {
    title: "Register",
  },
];

export const clients = [
  {
    name: "Databiz",
    src: Databiz,
  },
  {
    name: "Audiophile",
    src: Audiophile,
  },
  {
    name: "Meet",
    src: Meet,
  },
  {
    name: "Maker",
    src: Maker,
  },
];
