import './todos.css'

const $form = document.querySelector('.new-task')
const $input = document.querySelector('.new-task > input')
const $todos = document.querySelector('#todos')

const todos = [
    {
        title: '놀기',
        isDone: false,
    },
    {
        title: '먹기',
        isDone: false,
    },
]

const printTodos = () => {
    const html = todos.map(todo => {
        return `<li> ${todo.title} </li>`
    })
    $todos.innerHTML = `<ul> ${html.join(' ')} </ul>`
}

const checkTodo = e => {
    e.preventDefault()
    console.log($input.value)

    const todo = {title: $input.value, isDone: false}
    todos.push(todo)
    console.log(todos)
}

$form.addEventListener('submit', checkTodo)
