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
        redirect: '/welcome/1'
      },
      {
        path: "1",
        components: {
          main: First,
          footer: FirstActions
        },
      },
      {
        path: "2",
        components: {
          main: Second,
          footer: SecondActions
        },
      },
      {
        path: "3",
        components: {
          main: Third,
          footer: ThirdActions
        },
      },
      {
        path: "4",
        components: {
          main: Forth,
          footer: ForthActions
        },
      },
    ],
  },
];
