import { useState } from 'react';
import './App.css';
import Feed from "./Feed";
import NotificationContainer from './NotificationContainer';

function App(props) {

  const [notifications, setNotifications] = useState([]);

  return (
    <div>
      <header>header</header>
      <main>
        <span>main</span>
        <Feed setNotifications={setNotifications} />
      </main>
      <aside>aside</aside>
      <footer>footer</footer>
      <NotificationContainer notifications={notifications} />
    </div>
  );
}

export default App;
