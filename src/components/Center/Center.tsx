import { PropType, defineComponent } from 'vue'
import style from './Center.module.scss'

export const Center = defineComponent({
  props: {
    direction: {
      type: String as PropType<'row' | 'column'>,
      default: 'row'
    }
  },
  setup: (props, context) => {
    return () => (
      <div class={[style.center, props.direction]}>
        {context.slots.default?.()}
      </div>
    )
  }
})