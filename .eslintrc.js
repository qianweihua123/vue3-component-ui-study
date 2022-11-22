/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-22 16:24:32
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-22 16:30:59
 * @FilePath: /vue3-component-ui/.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-recommended", // vue3解析 https://eslint.vuejs.org/
        "plugin:@typescript-eslint/recommended",
        "@vue/typescript/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "rules": {
        "vue/html-self-closing": "off",
        "vue/max-attributes-per-line": "off",
        "vue/singleline-html-element-content-newline": "off",
        "vue/multi-word-component-names": "off",
    },
    globals: {
        defineProps: "readonly",
        defineOptions: "readonly",
    }
}