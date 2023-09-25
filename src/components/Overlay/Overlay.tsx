import { defineComponent, PropType } from 'vue';
import { Icon } from '../Icon/Icon';
import style from './Overlay.module.scss';

export const Overlay = defineComponent({
  props: {
    onClose: {
      type: Function as PropType<() => void>
    }
  },
  setup: (props, context) => {
    const close = () => {
      props.onClose?.()
    }
    return () => <div>
      <div class={style.mask} onClick={close}></div>
      <div class={style.overlay}>
        <section class={style.currentUser}>
          <h2>未登录用户</h2>
          <p>点击这里登录</p>
        </section>
        <nav>
          <ul class={style.action_list}>
            <li class={style.action}>
              <Icon name="charts" class={style.icon} />
              <span>统计图表</span>
            </li>
            <li class={style.action}>
              <Icon name="export" class={style.icon} />
              <span>导出数据</span>
            </li>
            <li class={style.action}>
              <Icon name="notify" class={style.icon} />
              <span>记账提醒</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  }
})