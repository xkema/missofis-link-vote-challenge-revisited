import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { readStorageData, updateStorageData } from '../utils/storage';
import NotificationContainer from './NotificationContainer';
import { useNotifications } from '../hooks/useNotifications';
import '../css/App.css';

function App(props) {

  const [feedItems, setFeedItems] = useState([]);
  const [contentTitle, setContentTitle] = useState('Unknown Page');

  const location = useLocation();

  const [stateX, notify] = useNotifications();

  useEffect(() => {
    const storageItems = readStorageData().items;
    if (storageItems && storageItems.length === 0) {
      notify('No feed items to list, please submit some!');
    }
    setFeedItems(storageItems);
  }, []);

  useEffect(() => {
    updateStorageData(feedItems);
  }, [feedItems]);

  useEffect(() => {
    let title = 'Unknown Page';
    if (location.pathname === '/') {
      title = 'Recent Items';
    } else if(location.pathname === '/add') {
      title = 'Submit Link';
    }
    setContentTitle(title);
  }, [location]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Link<b>VOTE</b> Challenge Revisited</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="add">+ Submit Link</NavLink>
        </nav>
      </header>
      <main className='App-content'>
        <div className='Content-header'>
          <h2>{contentTitle}</h2>
          <span># of total feed items: {feedItems.length}</span>
        </div>
        <Outlet context={[feedItems, setFeedItems, notify]} />
      </main>
      <aside className='App-sidebar'>
        <h3>&rsaquo; Hello!</h3>
        <p>This page, is a demo application coded with <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a> JavaScript library.</p>        
        {
          feedItems.length === 0 && 
          <>
            <hr />
            <p>No feed items to show right now. It is ok to see an empty pagination or a collapsed panel in the view. Nobody hurts!</p>
            <p>Please use "Submit Link" button at the menu to add items to the feed.</p>
            <p>You'll find an helper button right below the the form, that fills the feed with random number of items, in case you don't want to do it manually.</p>
          </>
        }
      </aside>
      <footer className='App-footer'>
        <span>Link<b>VOTE</b> Challenge Revisited</span>
        <span><a href="https://github.com/xkema/missofis-link-vote-challenge-revisited" target="_blank" rel="noopener noreferrer">GitHub</a></span>
      </footer>
      <NotificationContainer notifications={stateX.notifications} />
    </div>
  );
}

export default App;
