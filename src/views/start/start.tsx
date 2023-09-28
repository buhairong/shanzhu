import { defineComponent, ref } from 'vue'
import { Button } from '../../components/Button/Button'
import { FloatButton } from '../../components/FloatButton/FloatButton'
import style from './start.module.scss'
import { Center } from '../../components/Center/Center'
import { Icon } from '../../components/Icon/Icon'
import { Navbar } from '../../components/NavBar/NavBar'
import { Overlay } from '../../components/Overlay/Overlay'
import { MainLayout } from '../../components/Layouts/MainLayout'

export const Start = defineComponent({
  setup: (props, context) => {
    const overlayVisibleRef = ref(false)

    const onClickMenu = () => {
      overlayVisibleRef.value = !overlayVisibleRef.value
    }

    return () => (
      <div>
        <MainLayout>
          {
            {
              title: () => '玄睻记账',
              icon: () => <Icon name="menu" class={style.navIcon} onClick={onClickMenu}></Icon>,
              default: () => <>
                <Center class={style.icon_wrapper}>
                  <Icon name="pig" class={style.icon}></Icon>
                </Center>
                <div class={style.button_wrapper}>
                  <router-link to="/items/create">
                    <Button class={style.button}>开始记账</Button>
                  </router-link>
                </div>
                <router-link to="/items/create">
                    <FloatButton iconName="add"></FloatButton>
                </router-link>
                { overlayVisibleRef.value && <Overlay onClose={onClickMenu} /> }
              </>
            }
          }
        </MainLayout>
      </div>
    )
  }
})