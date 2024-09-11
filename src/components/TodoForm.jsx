import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';

function TodoForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle('');
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-l"
        placeholder="Добавить новую задачу"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r">
        Добавить
      </button>
    </form>
  );
}

export default TodoForm;