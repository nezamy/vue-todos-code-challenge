import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from "@vuex-orm/core"
import Task from "@/models/task"

Vue.use(Vuex);

const database = new VuexORM.Database();

database.register(Task);

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
})


export default store