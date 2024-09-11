import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, deleteTodo } from '../redux/todosSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);

  const toggleComplete = () => {
    dispatch(updateTodo({ ...todo, completed: !todo.completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo._id));
  };

  const handleEdit = () => {
    if (isEditing && title.trim()) {
      dispatch(updateTodo({ ...todo, title }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between mb-2 p-2 border rounded">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
          className="mr-2"
        />
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-b border-gray-300 focus:outline-none"
          />
        ) : (
          <span className={todo.completed ? 'line-through text-gray-500' : ''}>
            {todo.title}
          </span>
        )}
      </div>
      <div>
        <button onClick={handleEdit} className="mr-2 text-blue-500">
          {isEditing ? 'Сохранить' : 'Редактировать'}
        </button>
        <button onClick={handleDelete} className="text-red-500">
          Удалить
        </button>
      </div>
    </li>
  );
}

export default TodoItem;