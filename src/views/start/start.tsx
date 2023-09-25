import { defineComponent } from 'vue'
import { Button } from '../../components/Button/Button'
import { FloatButton } from '../../components/FloatButton/FloatButton'
import style from './start.module.scss'
import { Center } from '../../components/Center/Center'
import { Icon } from '../../components/Icon/Icon'

export const Start = defineComponent({
  setup: (props, context) => {
    const onClick = () => {
      console.log('onClick')
    }

    return () => (
      <div>
        <nav>nav</nav>
        <Center class={style.icon_wrapper}>
          <Icon name="pig" class={style.icon}></Icon>
        </Center>
        <div class={style.button_wrapper}>
          <Button class={style.button} onClick={onClick}>开始记账</Button>
        </div>
        <FloatButton iconName="add"></FloatButton>
      </div>
    )
  }
})