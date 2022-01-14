import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import '@/utils/permission'
import ElementPlus from 'element-plus'
import * as elIcon from '@element-plus/icons-vue'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus, { locale })
Object.keys(elIcon).forEach(key => {
  app.component(key, elIcon[key])
})
app.mount('#app')
