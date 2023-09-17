import { defineComponent } from 'vue'
import style from './first.module.scss'
import pig from '../../assets/icons/pig.svg'

export const First = defineComponent({
  setup() {
    return () => <div class={style.wrapper}>
      <div class={style.card}>
        <img src={pig} />
        <h2>会挣钱<br />还要会省钱</h2>
      </div>
      <div class={style.actions}>
        <router-link class={style.fake} to="/start">跳过</router-link>
        <router-link to="/welcome/2">下一页</router-link>
        <router-link to="/start">跳过</router-link>
      </div>
    </div>
  }
})
