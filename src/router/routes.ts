import { RouteRecordRaw } from 'vue-router'
import { Welcome } from "../views/welcome/Welcome"
import { First } from "../views/welcome/First"
import { FirstActions } from "../views/welcome/FirstActions"
import { Second } from "../views/welcome/Second"
import { SecondActions } from "../views/welcome/SecondActions"
import { Third } from "../views/welcome/Third"
import { ThirdActions } from "../views/welcome/ThirdActions"
import { Forth } from "../views/welcome/Forth"
import { ForthActions } from "../views/welcome/ForthActions"
import { Start } from "../views/start/start"

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "welcome",
  },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      {
        path: "",
        redirect: "/welcome/1",
      },
      {
        name: "Welcome1",
        path: "1",
        components: {
          main: First,
          footer: FirstActions,
        },
      },
      {
        name: "Welcome2",
        path: "2",
        components: {
          main: Second,
          footer: SecondActions,
        },
      },
      {
        name: "Welcome3",
        path: "3",
        components: {
          main: Third,
          footer: ThirdActions,
        },
      },
      {
        name: "Welcome4",
        path: "4",
        components: {
          main: Forth,
          footer: ForthActions,
        },
      },
    ],
  },
  {
    name: "start",
    path: "/start",
    component: Start,
  },
  {
    path: "/items",
    component: () => import("../views/items/ItemPage"),
    children: [
      {
        path: "create",
        component: () => import("../views/items/Create"),
      },
    ],
  },
];
