import { createRouter } from 'vue-router'
import { routes } from './routes'
import { history } from './history'

export const router = createRouter({
  history,
  routes
})
