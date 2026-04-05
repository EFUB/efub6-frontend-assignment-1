const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function render() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        if (todo.completed) li.classList.add('completed');

        li.innerHTML = `
            <span onclick="toggleTodo(${index})">${todo.text}</span>
            <button class="edit-btn" onclick="editTodo(${index})">수정</button>
            <button class="delete-btn" onclick="deleteTodo(${index})">삭제</button>
        `;
        todoList.appendChild(li);
    });
    // 2. 변경될 때마다 로컬 스토리지에 저장
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text !== '') {
        todos.push({ text, completed: false });
        todoInput.value = '';
        render();
    }
}
function deleteTodo(index) {
    todos.splice(index, 1);
    render();
}

function toggleTodo(index) {
    todos[index].completed = !todos[index].completed;
    render();
}

function editTodo(index) {
    const newText = prompt('수정할 내용을 입력하세요:', todos[index].text);
    if (newText !== null && newText.trim() !== '') {
        todos[index].text = newText.trim();
        render();
    }
}

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

render();