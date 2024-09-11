import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList() {
  const { items, status, error } = useSelector(state => state.todos);

  if (status === 'loading') {
    return <p>Загрузка...</p>;
  }

  if (status === 'failed') {
    return <p className="text-red-500">Ошибка: {error}</p>;
  }

  return (
    <ul>
      {items.map(todo => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;