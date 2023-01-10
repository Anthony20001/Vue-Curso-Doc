var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!'
    }
})

var app2 = new  Vue({
    el: '#app-2',
    data: {
        message: 'Usted cargó esta página el ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'Aprender Javascript'},
            {text: 'Aprender Vue'},
            {text: 'Construir algo increíble'}
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hola Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hola Vue!'
    }
})


Vue.component('todo-item', {
    template: '<li>Esta es una tarea.</li>'
})

var app7 = new Vue({
    el: '#app-7'
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

var app8 = new Vue({
    el: '#app-8',
    data: {
        groceryList: [
            {id: 0, text: 'Vegetales'},
            {id: 1, text: 'Queso'},
            {id: 2, text: 'Cualquier otra cosa que se supone que los humanos coman'}
        ]
    }
})

var data = {a: 1}

var vm = new Vue({
    
})