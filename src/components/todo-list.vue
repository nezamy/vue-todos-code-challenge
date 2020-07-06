<template lang="html">
  <div>
    
    <v-list subheader>
      <v-subheader v-if="tasks.length && completed.length">
        You have <span class="cyan--text">{{ completed.length }}</span> pending tasks 
      </v-subheader>
      <v-subheader 
        v-if="!completed.length && tasks.length"
        class="cyan--text">
        <v-icon class="cyan--text px-1">emoji_emotions</v-icon> Congratulations you completed all tasks
      </v-subheader>
      <v-subheader v-if="!tasks.length">
        You dont have Tasks to do. Add first task now
      </v-subheader>
      <TodoItem 
        v-if="tasks"
        v-for="task in tasks" 
        :key="task.id"
        :id="task.id" 
        :title="task.title"
        :completed="task.completed"
        @update="update"
        @remove="remove"
      />
    </v-list>
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';
import VueTypes from 'vue-types'

export default {
  props: {
    tasks: VueTypes.array.required,
  },
  components: {
    TodoItem,
  },
  computed: {
    completed(){
      return this.tasks.filter(v => {
        return !v.completed;
      })
    }
  },
  methods: {
    update(task){
      this.$emit('update', task);
    },
    remove(id){
      this.$emit('remove', id);
    }
  }
}
</script>

<style lang="css">
  span{
    display: inline-block;
    margin: 0 4px;
  }
  .v-list__tile{min-height:48px;}
  .v-list__tile__title, .v-list__tile{height: auto;}
  .v-list__tile__title{
    padding: 10px 0;
    white-space: inherit;
    overflow: visible;
    text-overflow: unset;
  }
</style>
