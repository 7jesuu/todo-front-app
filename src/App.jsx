import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { useDispatch } from 'react-redux';
import { fetchTodos } from './redux/todosSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Todo App</h1>
          <div>
            <Link to="/" className="mr-4">Главная</Link>
            <Link to="/about">О приложении</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;