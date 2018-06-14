<template>
	<!-- 触发函数 并 传入数据的id   -->
	<div  class='close' @click='$emit("remove",todo.id)'>X</div>
</template>


<script>
export default {
  props: {
  	//  todo 是 items ，在模板上绑定 v-bind:todo = "XXX"
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>
<style>
.close {
	float:right;
	border: 1px solid #ddd;
	border-radius: 50%;
	text-align: center;
	color: #000;
	background: honeydew;
}
</style>