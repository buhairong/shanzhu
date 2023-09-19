import { RouteRecordRaw } from 'vue-router'
import { Welcome } from "../views/welcome/Welcome"
import { First } from "../views/welcome/First"
import { Second } from "../views/welcome/Second"
import { Third } from "../views/welcome/Third"
import { Forth } from "../views/welcome/Forth"

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
          footer: FirstAction
        },
      },
      {
        path: "2",
        component: Second,
      },
      {
        path: "3",
        component: Third,
      },
      {
        path: "4",
        component: Forth,
      },
    ],
  },
];
