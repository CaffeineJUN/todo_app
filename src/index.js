import './todos.css'

const todos = [
    {title: 'HTML', isDone: true},
    {title: 'JS', isDone: true},
    {title: 'React', isDone: true},
]

const $form = document.querySelector('.new-task')
const $input = document.querySelector('.new-task > input')
const $todos = document.querySelector('#todos')

const printTodos = () => {
    const html = todos.map((todo, index) => {
        return `
		<li data-index="${index}">
			<button class="delete">×</button>
			<input type="checkbox" class="toggle-checked" />
			<span class="text">${todo.title}</span>
		</li>
		`
    })

    $todos.innerHTML = `<ul>${html.join('')}</ul>`
}

const checkTodo = event => {
    event.preventDefault()

    const todo = {title: $input.value, isDone: false}
    todos.push(todo)

    $input.value = ''

    printTodos()
}

$form.addEventListener('submit', checkTodo)

const deleteTodo = index => {
    todos.splice(index, 1)
    printTodos()
}
const toggleTodo = () => {
    console.log('toggle')
}

document.body.addEventListener('click', event => {
    const index = parseInt(event.target.parentNode.dataset.index, 10)
    if (event.target.className === 'delete') {
        deleteTodo(index)
    } else if (event.target.className === 'toggle-checked') {
        toggleTodo(index)
    }
})

printTodos()
