import { defineComponent } from 'vue'
import style from './welcome.module.scss'
import logo from '../../assets/icons/mangosteen.svg'

export const Welcome = defineComponent({
  setup() {
    return () => <div class={style.wrapper}>
      <header>
        <img src={logo} />
        <h1>玄睻记账</h1>
      </header>
      <main><router-view></router-view></main>
      <footer>footer</footer>
    </div>
  }
})
