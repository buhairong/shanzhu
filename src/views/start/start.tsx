import { defineComponent } from 'vue'
import { Button } from '../../components/Button/Button'
import style from './start.module.scss'

export const Start = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log('onClick')
    }

    return () => (
      <div>
        <div class={style.button_wrapper}>
          <Button class={style.button} onClick={onClick}>开始记账</Button>
        </div>
      </div>
    )
  }
})