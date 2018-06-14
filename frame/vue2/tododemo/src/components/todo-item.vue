<template>
	<div class="todo-wrap">
		<h5>todo demo</h5>

		<!-- v-model 双向绑定, 方便 js 操作获取 -->
		<input type="text" 
		v-model="todo_text" 
		:placeholder="placeholder" 
		@keyup.enter="additem">
		<p 
		:class="{colorRed:item.active}" 
		v-for="item in item_obj" 
		@click="turnRed(item)" 
		>{{item.value}} 

		<!-- 这里可以绑定 item -->
		<todoDel :todo = "item" @remove="todDL"></todoDel>
		</p>

	</div>
</template>

<script>
import todoDel from './todo-del.vue';

// 加个id 把对象独立
let text_id = 1;

export default {
	components : {
		todoDel
	},
	data () {
		return {
			placeholder: 'something',
			todo_text : '',
			item_obj: [
				{
					value: 'test one',
					active: false,
					id: text_id++
				},
				{
					value: 'test two',
					active: false,
					id: text_id++
				},
			]
		}
	},
	methods: {
		additem: function() {
			if(this.todo_text == '') {return}
			this.item_obj.push({
				value: this.todo_text,
				active: false,
				id: text_id++
			});
			this.todo_text = '';
		},
		todDL: function(rmItem) {
			this.item_obj = this.item_obj.filter(function(arr){
			// 过滤, 自动返回匹配结果，这里的意思是返回不一样的内容
				return arr.id !== rmItem;
			});
		},
		turnRed: function(item) {
			item.active = !item.active;
		}
	},
}

</script>

<style>
.colorRed {
	color: #fff;
	background: crimson;
}
.todo-wrap p{
	width: 50%;
	margin: 10px auto;
	cursor:pointer;
}
</style>