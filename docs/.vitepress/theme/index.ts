import DefaultTheme from 'vitepress/theme'
import '@qwh/theme-chalk/src/index.scss'
import QIcon from '@qwh/components/icon'
console.log(QIcon, 'QIcon');

export default {
    ...DefaultTheme, //默认的主题
    enhanceApp({ app }) { //app 入口
        app.use(QIcon); // 注册全局组件
    }
}