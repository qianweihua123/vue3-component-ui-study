/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-17 16:43:09
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-18 16:34:41
 * @FilePath: /vue3-component-ui/packages/utils/withInstall.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin; // 添加插件类型
export function withInstall<T>(comp: T) {//comp是一个泛型
    //告诉这个泛型是有一个 install方法
    (comp as SFCWithInstall<T>).install = function (app) {
        const { name } = comp as unknown as { name: string }
        app.component(name, comp);// 注册全局组件
    }
    return comp as SFCWithInstall<T>;
}
