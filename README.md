# Vue todos code challenge
**vue-todos-code-challenge** is a code challenge for Vue.JS developers applying for a job at i22.

## Scenario
So here you are! You decided to apply for a job at i22 and now we are asking you to help us with a Todo App.
We already setup a brand new project for you that already contains a very basic Vue.js setup. Your task is now to finish the Todo App by completing the features to add, edit and delete todos and storing them only in the client storage.

## Technical starting point
Our team was already able to complete the following:

* Add `vuex` and create a default store
* Add `vuetify` for UI components
* Add `vue-types` for prop validation
* Add the basic app and component structure

## Mission
- [x] Fork this repository
- [x] Create a named `vuex` module to hold your todos
- [x] Complete the CRUD features in the GUI and make sure they are reflected in the store
- [x] Make sure the `todo-list` component dynamically displays the todos
- [x] Write concise commit messages
- [x] Submit a merge request and describe your changes precisely

## Bonus
- [x] Add [Vuex-ORM](https://vuex-orm.github.io/vuex-orm/)
- [ ] Add [TypeScript](https://typescriptlang.org)
- [ ] Document with [jsDoc](https://devdocs.io/jsdoc/) comments

## Please note
- Pay attention to your code style and structure, don't ignore the eslint hints.
- Design your Vue components: use props, slots and whatever you need to keep your code clean.
- Display well in Google Chrome.
- Don't reinvent the wheel, use `vuetify` components when possible
- Don't test browsers except latest Google Chrome
- Don't pay special attention for responsive design

## Feel free to
- Improve the design to have better UI and UX.
- Re-organize the codebase.
- Use TypeScript.
- Create new modules/methods/components.
- Modify existing code.
- Add new packages.
- Edit `README.md` to add documentation.
- Fix potential bugs

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Added Components
there is three components `todo-list`, `todo-item`, `todo-form`

### Todo-list
| Props         | Type          | Description          |
| ------------- |:-------------:| --------------------:|
| tasks         | Array         | List of task items   |

| events        | args          | Args return          |
| ------------- |:-------------:| --------------------------:|
| update        | task          | Updated task item `object` |
| remove        | id            | Task item id               |

### Todo-item
| Props         | Type          | Description          |
| ------------- |:-------------:| --------------------:|
| id            | string        | Item id              |
| title         | string        | Item title           |
| completed     | bool          | If item completed    |

| events        | args          | Args return          |
| ------------- |:-------------:| --------------------------:|
| update        | task          | Updated task item `object` |
| remove        | id            | Task item id               |


### Todo-form
| events        | args          | Args return          |
| ------------- |:-------------:| --------------------:|
| add           | task          | `string` of new item |
