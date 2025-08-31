import React, { useState } from 'react';
import "./Todo.css";

const Todo = () => {
    const [itemInput, setItemInput] = useState('');
    const [todoItems, setTodoItems] = useState([]);
    const [priority, setPriority] = useState('normal');
    const [filter, setFilter] = useState('all');

    const filterOptions = ['all', 'completed', 'pending', 'high'];

    const addTodo = () => {
        if(!itemInput.trim()) return alert('Please enter a task.');

        const item = {
            id: Date.now(),
            title: itemInput.trim(),
            priority,
            completed: false
        }

        setTodoItems(prev => [...prev, item]);
        setItemInput('');
        setPriority('normal');
    }

    const deleteTodo = (id) => {
        setTodoItems(todoItems.filter(todo => todo.id !== id));
    }

    const toggleCompleted = (id) => {
        setTodoItems(
            todoItems.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
        )
    }

    const filterTodos = todoItems.filter(todo => {
        if(filter === 'completed') return todo.completed;
        if(filter === 'pending') return !todo.completed;
        if(filter === 'high') return todo.priority === 'high';
        return true;
    })

  return (
    <section className='todo-container'>
        <h2>✅ Todo List</h2>

        <div className='task-input'>
            <label htmlFor="itemInput">Enter a task</label>
            <input 
                id='itemInput'
                type="text"
                 value={itemInput}
                 onChange={(e) => setItemInput(e.target.value)}
            />

            <select 
                name="priority" 
                value={priority} 
                onChange={(e) => setPriority(e.target.value)}>
                <option value='normal'>Normal</option>
                <option value='high'>High</option>
            </select>
            <button onClick={addTodo}>Add</button>
        </div>

        <div className="filters">
            {filterOptions.map(type => (
                <button
                    key={type} 
                    data-filter={type} 
                    className={filter === type ? 'active' : ''}
                    onClick={() => setFilter(type)}
                >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
            ))}
        </div>

        <div>
            { todoItems.length === 0 ? (
                <div>No items found.</div>
            ) : (
                <ul>
                    {filterTodos.map(todo => (
                        <li 
                            key={todo.id} 
                            className={todo.completed ? "completed" : ""}
                        >
                            <span>{todo.title} {todo.priority === 'high' ? '🔥' : ''}</span>
                            <div className='action-buttons'>
                                <button onClick={() => toggleCompleted(todo.id)}>{todo.completed ? "Undo" : "Completed"}</button>
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>

        <div className="summary">
            <p>Total: {todoItems.length}</p>
            <p>Pending: {todoItems.filter(todo => !todo.completed).length}</p>
        </div>
    </section>
  )
}

export default Todo