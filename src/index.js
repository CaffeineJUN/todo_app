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
    const html = todos.map(todo => {
        return `
		<li>
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
    console.log($input.value)

    const todo = {title: $input.value, isDone: false}
    todos.push(todo)
    console.log(todos)

    $input.value = ''

    printTodos()
}

$form.addEventListener('submit', checkTodo)

const deleteTodo = () => {
    console.log('delete')
}

const toggleTodo = () => {
    console.log('toggle')
}

document.body.addEventListener('click', event => {
    if (event.target.className === 'delete') {
        deleteTodo()
    } else if (event.target.className === 'toggle-checked') {
        toggleTodo()
    }
})

printTodos()
