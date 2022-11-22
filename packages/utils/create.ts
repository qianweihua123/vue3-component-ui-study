/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-17 14:59:12
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-18 19:40:04
 * @FilePath: /vue3-component-ui/packages/utils/create.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//第一个参数相当于标签名 button
const _bem = (prefixedName, blockSuffix, element, modifier) => {
    if (blockSuffix) {
        prefixedName += `-${blockSuffix}`
    }
    if (element) {
        prefixedName += `__${element}`
    }
    if (modifier) {
        prefixedName += `--${modifier}`
    }
    return prefixedName
}
function createBEM(prefixedName: string) {
    const b = (blockSuffix = '') => _bem(prefixedName, blockSuffix, '', '')
    const e = (element = '') =>
        element ? _bem(prefixedName, '', element, '') : ''
    const m = (modifier = '') =>
        modifier ? _bem(prefixedName, '', '', modifier) : ''
    const be = (blockSuffix = '', element = '') =>
        blockSuffix && element ? _bem(prefixedName, blockSuffix, element, '') : ''
    const em = (element, modifier) =>
        element && modifier ? _bem(prefixedName, '', element, modifier) : ''
    const bm = (blockSuffix, modifier) =>
        blockSuffix && modifier ? _bem(prefixedName, blockSuffix, '', modifier) : ''
    const bem = (blockSuffix, element, modifier) =>
        blockSuffix && element && modifier
            ? _bem(prefixedName, blockSuffix, element, modifier)
            : ''
    const is = (name?, state?) => (state ? `is-${name}` : '')
    return {
        b,
        e,
        m,
        be,
        em,
        bm,
        bem,
        is
    }
}
export function createNamespace(name: string) {
    const prefixedName = `u-${name}`
    return createBEM(prefixedName)
}
const bem = createNamespace('button');
// z-button
// z-button-box
// z-button__element
// z-button--disabled
console.log(bem.b())
console.log(bem.b('box'))
console.log(bem.e('element'));
console.log(bem.m('disabled'))
console.log(bem.is('checked', true))
console.log(bem.bem('box', 'element', 'disabled'))
//bem规范