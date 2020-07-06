<template lang="html">
  <div class="todo-item">
    <v-list-tile @click="update({completed: !completed})">
    
      <v-list-tile-action>
        <v-icon :color="completed ? 'cyan accent-3' : 'grey'">{{ completed ? 'done' : 'check_box_outline_blank' }}</v-icon>
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title
          :class="completed ? 'complete-task' : ''" 
          v-text="title" />
      </v-list-tile-content>

      <v-list-tile-action>
        <v-btn 
          color="error"
          small
          flat
          icon
          @click="remove(id)">
          <v-icon color="deep-orange lighten-1">delete</v-icon>
        </v-btn>
      </v-list-tile-action>

    </v-list-tile>
    <v-divider />
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  props: {
    id: VueTypes.string.required,
    title: VueTypes.string.required,
    completed: VueTypes.bool.required,

  },
  methods: {
    update(task){
      this.$emit('update', {
        ...task,
        id: this.id 
      });
    },
    remove(id){
      this.$emit('remove', id);
    }
  }
}
</script>

<style lang="css">
.complete-task{
  color: #BBB;
}
.complete-task:before{
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: #00E5FF;
  top: 50%;
}
.todo-item:last-child + hr{display: none;}
</style>
