import { defineComponent, PropType } from 'vue'
import style from './Tabs.module.scss'

export const Tabs = defineComponent({
  props: {
    selected: {
      type: String
    },
  },

  setup: (props, context) => {
    return () => {
      const array = context.slots.default?.()
      if (!array) {
        return () => null
      }

      for (let i = 0; i < array.length; i++) {
        if (array[i].type !== Tab) {
          throw new Error('Tabs 必须传入 Tab 组件')
        }
      }
      return <div class={style.tabs}>
        <ol class={style.tabs_nav}>
          {
            array.map(item =>
              <li
                class={item.props?.name === props.selected ? style.selected : ''}
                onClick={() => context.emit('update:selected', item.props?.name)}
              >
                {
                  item.props?.name
                }
              </li>
            )
          }
        </ol>
        <div>
          {
            array.find(item => item.props?.name === props.selected)
          }
        </div>
      </div>
    }
  }
})

export const Tab = defineComponent({
  props: {
    name: {
      type: String
    }
  },

  setup: (props, context) => {
    return () => (
      <div>{context.slots.default?.()}</div>
    )
  }
})