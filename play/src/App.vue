<!--
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-17 14:48:47
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-22 16:33:54
 * @FilePath: /vue3-component-ui/play/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import UIcon from '@qwh/components/icon/src/icon.vue'
import { AddCircle } from '@vicons/ionicons5'
</script>

<template>
  <u-Icon :color="'red'" :size="20">
    <AddCircle></AddCircle>
  </u-Icon>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
