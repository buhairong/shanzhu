import { VueElement, defineComponent, vModelCheckbox, vModelText, PropType } from 'vue'
import style from './Icon.module.scss'

export const Icon = defineComponent({
  props: {
    name: {
      type: String
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>
    }
  },
  setup: (props, context) => {
    return () => (
      <svg class={style.icon} onClick={props.onClick}>
        <use xlinkHref={'#' + props.name}></use>
      </svg>
    )
  }
})
