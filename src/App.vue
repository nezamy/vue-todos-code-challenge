<template>
  <v-app>
    <!-- <v-toolbar
      app
    >
      <v-toolbar-title v-text="title"/>
    </v-toolbar> -->
    <v-content>
      <v-layout
        align-center
        fill-height
        justify-center
      >
        <v-flex 
          xs10 
          md8>
          <h1 class="font-weight-regular white--text py-4">Todo App</h1>
          <v-card>
            <TodoList 
              :tasks="tasks" 
              @update="update"
              @remove="remove" />

            <TodoForm @add="add"/>
          </v-card>

        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import TodoForm from '@/components/todo-form'
import TodoList from '@/components/todo-list'
import Task from "@/models/task";
export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
  data () {
    return {
      title: 'Vue Todos'
    }
  },
  created(){
    let task = JSON.parse( window.localStorage.getItem('task') );
    Task.create({
      data: task
    })
  },
  computed: {
    tasks: () => Task.all()
  },
  methods: {
      add(task){
        Task.insert({
          data: {
            title: task
          }
        });
      },
      update(task){
        Task.update({
          where: task.id,
          data: task
        });
      },
      remove(id){
        Task.delete(id);
      }
  }
}
</script>
<style lang="css">
  .theme--light.application{
    background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%);
  }
</style>

