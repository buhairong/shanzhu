import { defineComponent, ref } from 'vue'
import { Icon } from '../../components/Icon/Icon'
import { MainLayout } from '../../components/Layouts/MainLayout'
import { Tab } from '../../components/Tabs/Tabs'
import { Tabs } from '../../components/Tabs/Tabs'

export const Create = defineComponent({
  setup: (props, context) => {
    const refKind = ref('支出')
   
    return () => (
      <MainLayout>
        {
          {
            title: () => '记一笔',
            icon: () => <Icon name="left" />,
            default: () => <>
              <Tabs v-model:selected={refKind.value}>
                <Tab name="支出">
                  icon 列表
                </Tab>
                <Tab name="收入">
                  icon 列表2
                </Tab>
              </Tabs>
            </>
          }
        }
      </MainLayout>
    )
  }
})

export default Create