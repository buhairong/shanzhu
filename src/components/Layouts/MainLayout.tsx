import { defineComponent } from 'vue'
import { Navbar } from '../NavBar/NavBar'

export const MainLayout = defineComponent({
  setup: (props, context) => {
    return () => (
      <div>
        <Navbar>
          {
            {
              default: () => context.slots.title?.(),
              icon: () => context.slots.icon?.()
            }
          }
        </Navbar>
      </div>
    )
  }
})