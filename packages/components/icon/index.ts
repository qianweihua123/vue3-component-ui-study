/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-17 15:26:09
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-18 16:42:53
 * @FilePath: /vue3-component-ui/packages/components/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { withInstall } from '@qwh/utils/withInstall';

//整合组件的，最终导出组件
import _Icon from './src/icon.vue'

const Icon = withInstall(_Icon); // 生成带有install方法的组件
export default Icon; // 导出Icon组件
export * from './src/icon'

//给 vue上扩展一个类型
declare module 'vue' {
    export interface GlobalComponents {
        QIcon: typeof Icon
    }
}
