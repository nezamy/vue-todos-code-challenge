<template lang="html">
  <v-text-field
    label="Todo"
    placeholder="What do you have to do?"
    solo
    hide-details
    @keydown.enter="add"
    v-model="task"
  />
</template>

<script>
// import VueTypes from 'vue-types'

export default {
  data(){
    return {
      task: ''
    }

  },
  methods: {
    add(){
      if(this.task){
        this.$emit('add', this.task);
        this.task = '';
      }
    }
  },
}
</script>