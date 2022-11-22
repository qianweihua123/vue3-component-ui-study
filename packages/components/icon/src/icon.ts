/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-17 15:27:04
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-17 15:27:23
 * @FilePath: /vue3-component-ui/packages/components/icon/src/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//组件相关属性和 ts 的类型
import { ExtractPropTypes, PropType } from 'vue'

export const iconProps = {
    size: [Number, String] as PropType<number | string>,
    color: String
} as const
export type IconProps = ExtractPropTypes<typeof iconProps>
