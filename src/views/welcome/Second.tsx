import { defineComponent } from 'vue'
import style from './first.module.scss'
import clock from '../../assets/icons/clock.svg'

export const Second = defineComponent({
  setup() {
    return () => <div class={style.wrapper}>
      <div class={style.card}>
        <img src={clock} />
        <h2>每日提醒<br />不遗漏每一笔账单</h2>
      </div>
      <div class={style.actions}>
        <router-link class={style.fake} to="/start">跳过</router-link>
        <router-link to="/welcome/3">下一页</router-link>
        <router-link to="/start">跳过</router-link>
      </div>
    </div>
  }
})
