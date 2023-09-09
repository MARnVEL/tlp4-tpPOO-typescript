import { ITodo } from "./Todo"

export class TodoList {
    private todos: ITodo[] = []
    generarId (): number {
        const arrayIds = this.todos.map(todo => todo.id)
        if (!arrayIds.length) {
            arrayIds.push(0)
        }
        return Math.max(...arrayIds) + 1
    }

    addTodo (todo: ITodo) {
        this.todos.push(todo)
    }

    getTodos () {
        return this.todos
    }

    deleteTodo (id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo (id:number) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.done = true
            }
            return todo
        })
    }
}

// Instancio una nueva lista de tareas:
const myList = new TodoList()

// Creamos una nueva tarea:
const tarea1: ITodo = {
    id: myList.generarId(),
    title: 'Mi primer tarea.',
    done: false,
    date: new Date().toLocaleString()
}
// Añadimos la primer tarea:
myList.addTodo(tarea1)

// Creamos una nueva tarea:
const tarea2: ITodo = {
    id: myList.generarId(),
    title: 'Mi segunda tarea.',
    done: false,
    date: new Date().toJSON().slice(0, 10)
}
// Añadimos la segunda tarea
myList.addTodo(tarea2)

// Creamos una nueva tarea:
const tarea3: ITodo = {
    id: myList.generarId(),
    title: 'Mi tercer tarea.',
    done: false,
    date: new Date().toLocaleString()
}
// Añadimos la tercer tarea
myList.addTodo(tarea3)

// Mostramos nuestra lista de tareas:
console.log('Lista de tareas: ', myList.getTodos())

// Eliminamos la tarea 2:
myList.deleteTodo(2)

// Mostramos nuestra lista de tareas:
console.log('Lista de tareas: ', myList.getTodos())

// Creamos una nueva tarea:
const tarea4: ITodo = {
    id: myList.generarId(),
    title: 'Mi cuarta tarea.',
    done: false,
    date: new Date().toLocaleString()
}
// Añadimos la tercer tarea
myList.addTodo(tarea4)

// Mostramos nuestra lista de tareas:
console.log('Lista de tareas: ', myList.getTodos())

// Completamos una tarea:
myList.completeTodo(4)

// Mostramos nuestra lista de tareas:
console.log('Lista de tareas: ', myList.getTodos())
