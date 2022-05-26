import './todos.css'

const todos = [
    {title: 'HTML', isDone: true},
    {title: 'JS', isDone: true},
    {title: 'React', isDone: true},
]

//
// 폼,input 입력 이벤트 추가하기
// 입력했을때 todo추가
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

    // todo 추가
    const todo = {title: $input.value, isDone: false}
    todos.push(todo)
    console.log(todos)

    // input 초기화
    $input.value = ''

    // todos 출력
    printTodos()
}

$form.addEventListener('submit', checkTodo)

// todos 출력
printTodos()
