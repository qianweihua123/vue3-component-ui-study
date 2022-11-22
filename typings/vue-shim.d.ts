/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-17 14:54:46
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-17 14:55:17
 * @FilePath: /vue3-component-ui/typings/vue-shim.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}