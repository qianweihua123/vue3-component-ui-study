<!--
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-17 15:40:54
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-22 16:31:33
 * @FilePath: /vue3-component-ui/packages/components/icon/src/icon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<i :class="bem.b()" :style="style">
		<slot></slot>
	</i>
</template>

<script lang="ts" setup>
import { createNamespace } from '@qwh/utils/create';
import { computed, CSSProperties } from 'vue';
import { iconProps } from './icon';
const bem = createNamespace('icon');
defineOptions({
	name: 'u-icon',
});
const props = defineProps(iconProps);
//计算属性来计算样式
const style = computed<CSSProperties>(() => {
	if (!props.size && !props.color) {
		return {};
	}
	return {
		...(props.size ? { 'font-size': props.size + 'px' } : {}),
		...(props.color ? { color: props.color } : {}),
	};
});
</script>
