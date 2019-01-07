<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul v-for="(todo,index) in todos" :id="index" class="todos">
      <li><label for="">{{index+1}}.{{todo.value}}</label></li>
    </ul>
  </div>
</template>

<style>
</style>

<script>
import './assets/todos.less';
import './assets/site.less';

export default {
  name:'app',
  data(){
    return{
      title:"vue-todos",
      todos:[
        {value:"阅读一本书",done:false},
        {value:"补充一下什么", done:true},
        {value:"写心得", done: false}
      ]
    }  
  }
}
</script>



