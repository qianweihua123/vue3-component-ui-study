/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-17 14:48:47
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-17 16:18:24
 * @FilePath: /vue3-component-ui/play/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()]
})
