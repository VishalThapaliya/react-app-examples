import { useEffect, useRef, useState } from "react";
import './Todo.css';

const Todo = () => {
    const [taskInput, setTaskInput] = useState('');
    const [priority, setPriority] = useState('normal');
    const [tasks, setTasks] = useState([]);
    const [filter, setFilter] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    const [editingTaskId, setEditingTaskId] = useState(null);
    const [editInput, setEditInput] = useState('');
    const [editPriority, setEditPriority] = useState('');
    const editInputRef = useRef(null);

    const filterOptions = ["All", "Completed", "Active", "High"];

    // save tasks to localStorage
    useEffect(() => {
        if(!isLoading) {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }, [tasks, isLoading]);

    // load tasks from localStorage
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if(savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }

        setIsLoading(false);
    }, []);

    useEffect(() => {
        if(editingTaskId && editInputRef.current) {
            editInputRef.current.focus();
        }
    }, [editingTaskId]);
    
    const filteredTasks = tasks.filter(task => {
        if(filter === 'Completed') return task.completed;
        if(filter === 'Active') return !task.completed;
        if(filter === 'High') return task.priority === 'high';
        return true;
    })


    const addATask = () => {
        if(!taskInput.trim()) return alert('Please enter a task.');
        const task = {
            id: Date.now(),
            name: taskInput.trim(),
            priority,
            completed: false
        }

        setTasks(prev => [...prev, task]);
        setTaskInput('');
    }

    const deleteATask = (id) => {
        const element = document.getElementById(`task-${id}`);
        if(element) {
            element.classList.add('fade-out');
            setTimeout(() => {
                setTasks(prev => prev.filter(task => task.id !== id))
            }, 300);
        }
    }

    const toggleCompleted = (id) => {
        setTasks(tasks.map(task => {
            if(task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                }
            } else {
                return task;
            }
        }))
    }

    const editTask = (id, name, priority) => {
        setEditingTaskId(id);
        setEditInput(name);
        setEditPriority(priority)
    }

    const saveEdit = (id) => {
        setTasks(tasks.map(task => task.id === id ? {...task, name: editInput.trim(), priority: editPriority} : task));
        setEditInput('');
        setEditingTaskId(null);
    }

    const cancelEdit = () => {
        setEditingTaskId(null);
        setEditInput('');
        setEditPriority('');
    }

    return (
        <section className="todo-container">
            <h1>My Tasks</h1>

            <div className="input-group">
                <input 
                    type="text"
                    placeholder="Enter a task"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />

                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                </select>

                <button onClick={addATask}>+ Add</button>
            </div>

            <div style={{ marginTop: "10px", display: "flex", gap: "5px"}}>
                {filterOptions.map(option => (
                    <button key={option} onClick={() => setFilter(option)}>{option}</button>
                ))}
            </div>

            <div className="tasks-list">
                {filteredTasks.map(({ id, name, priority, completed }) => (
                    <div key={id} id={`task-${id}`} className="task fade-in">
                        { editingTaskId === id ? 
                            <div className="input-group">
                                <input
                                    ref={editInputRef} 
                                    type="text"
                                    value={editInput}
                                    onChange={(e) => setEditInput(e.target.value)}
                                />

                                <select value={editPriority} onChange={(e) => setEditPriority(e.target.value)}>
                                    <option value="normal">Normal</option>
                                    <option value="high">High</option>
                                </select>
                                <div className="actions">
                                    <button onClick={() => saveEdit(id)}>Save</button>
                                    <button onClick={cancelEdit}>Cancel</button>
                                </div>
                            </div> : 
                            
                            <>
                                <h3 style={{ textDecoration: completed ? 'line-through' : '', flex: "2" }}>
                                    {name} 
                                    <span className="priority">{priority === 'high' ? '🔥' : ''}</span>
                                </h3>
                                
                                <div className="actions">
                                    <button onClick={() => toggleCompleted(id)}>{completed ? "Completed" : "Active"}</button>
                                    <button onClick={() => editTask(id, name, priority)}>Edit</button>
                                    <button onClick={() => deleteATask(id)}>Delete</button>
                                </div>
                            </>
                        }

                        
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Todo;