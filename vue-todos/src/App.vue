<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul v-for="(todo,index) in todos" :id="index" class="todos" >
      <li :class="{'checked': todo.done}">
        <label for="">{{index+1}}.{{todo.value}}</label>
        <time>{{ todo.created| date }}</time>
      </li>
    </ul>
  </div>
</template>

<style>
</style>

<script>
import './assets/todos.less';
import './assets/site.less';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

export default {
  name:'app',
  data(){
    return{
      title:"vue-todos",
      todos:[
        {value:"阅读一本书",done:false, created:Date.now()},
        {value:"补充一下什么", done:true, created:Date.now()+30000000},
        {value:"写心得", done: false, created:Date.now()-30000000}
      ]
    }  
  },
  filters: {
    date(val){
      return moment(val).calendar();
    }
  }
}
</script>



