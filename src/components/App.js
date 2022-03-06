import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { readStorageData, updateStorageData } from '../utils/storage';
import '../css/App.css';

function App(props) {

  const [feedItems, setFeedItems] = useState([]);

  useEffect(() => {
    setFeedItems(readStorageData().items);
  }, []);

  useEffect(() => {
    updateStorageData(feedItems);
  }, [feedItems]);

  return (
    <div className='App'>
      <header className='App-header'>
        <nav>
          <NavLink to="/">home</NavLink>
          <NavLink to="add">add</NavLink>
        </nav>
      </header>
      <main className='App-content'>
        <Outlet context={[feedItems, setFeedItems]} />
        <span>~~~{feedItems.length} total</span>
      </main>
      <aside className='App-sidebar'>aside</aside>
      <footer className='App-footer'>footer</footer>
    </div>
  );
}

export default App;
