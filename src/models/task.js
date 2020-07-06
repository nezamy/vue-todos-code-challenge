import { Model } from '@vuex-orm/core';
import { v4 as uuidv4 } from 'uuid';
export default class Task extends Model {
    static entity = "tasks";
    static task = JSON.parse( window.localStorage.getItem('task') );

    static fields () {
        return {
            id: this.uid(() => uuidv4()),
            title: this.attr(''),
            completed: this.attr(false),
        }
    }

    static afterCreate() {
        window.localStorage.setItem('task', JSON.stringify( this.all()));
    }

    static afterUpdate() {
        window.localStorage.setItem('task', JSON.stringify( this.all()));
    }

    static afterDelete() {
        window.localStorage.setItem('task', JSON.stringify( this.all()));
    }
}