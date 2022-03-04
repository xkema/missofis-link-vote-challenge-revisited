import Notification from './Notification';

function NotificationContainer(props) {

  const filterNotifications = (notificationsToBeFiltered) => {
    return notificationsToBeFiltered.filter(notification => Date.now() - notification.date < 5000);
  };
  
  return (
    <ul>
      {
        filterNotifications(props.notifications).map((notification) => {
          return (
            <li key={notification.date}>
              <Notification message={notification.message} />
            </li>
          )
        })
      }
    </ul>
  );
}

export default NotificationContainer;
