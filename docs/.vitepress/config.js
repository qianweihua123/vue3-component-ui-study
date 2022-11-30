/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-22 20:52:12
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-22 20:52:25
 * @FilePath: /vue3-component-ui-study/docs/.vitepress/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    title: 'Q-UI',
    description: 'qwh UI',
    themeConfig: {
        lastUpdated: '最后更新时间',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '编辑此网站',
        repo: 'https://gitee.com/login',
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Zi Shui'
        },
        nav: [{
                text: '指南',
                link: '/guide/installation',
                activeMatch: '/guide/'
            },
            {
                text: '组件',
                link: '/component/icon',
                activeMatch: '/component/'
            }
        ],
        sidebar: {
            '/guide/': [{
                text: '指南',
                items: [{
                        text: '安装',
                        link: '/guide/installation'
                    },
                    {
                        text: '快速开始',
                        link: '/guide/quieStart'
                    }
                ]
            }],
            '/component/': [{
                text: '基础组件',
                items: [{
                    text: 'Icon',
                    link: '/component/icon'
                }]
            }]
        }
    }
}