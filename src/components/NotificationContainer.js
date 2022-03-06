import Notification from './Notification';
import '../css/NotificationContainer.css';

function NotificationContainer(props) {  
  return (
    <div className='NotificationContainer'>
      <ul>
        {
          props.notifications.map((notification) => {
            return (
              <li key={notification.id}>
                <Notification notification={notification} />
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default NotificationContainer;
