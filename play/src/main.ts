/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-17 14:48:47
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-18 17:05:39
 * @FilePath: /vue3-component-ui/play/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Icon from '@qwh/components/icon';
import "@qwh/theme-chalk/src/index.scss"
const plugins = [Icon]
const app = createApp(App)
plugins.forEach(plugin => app.use(plugin))
app.mount('#app')
