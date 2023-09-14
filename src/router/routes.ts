import { RouteRecordRaw } from 'vue-router'
import { Bar } from '../views/BarView'
import { Welcome } from "../views/welcome/Welcome"
import { First } from "../views/welcome/First"
import { Second } from "../views/welcome/Second"
import { Third } from "../views/welcome/Third"
import { Forth } from "../views/welcome/Forth"

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Bar,
  },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      {
        path: "1",
        component: First,
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
