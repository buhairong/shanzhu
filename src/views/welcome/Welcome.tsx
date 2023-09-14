import { defineComponent } from 'vue'
import style from './welcome.module.scss'

export const Welcome = defineComponent({
  setup() {
    return () => <div class={style.wrapper}>
      <header>logo</header>
      <main><router-view></router-view></main>
      <footer>footer</footer>
    </div>
  }
})
