import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { readStorageData, updateStorageData } from './utils/storage';
import './App.css';

function App(props) {

  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    setFeedItems(readStorageData().items);
  }, []);

  useEffect(() => {
    updateStorageData(feedItems);
  }, [feedItems]);

  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">home</NavLink>
          <NavLink to="add">add</NavLink>
        </nav>
      </header>
      <main>
        <span>main</span>
        <Outlet context={[feedItems, setFeedItems]} />
        <span>~~~{feedItems.length} total</span>
      </main>
      <aside>aside</aside>
      <footer>footer</footer>
    </div>
  );
}

export default App;
