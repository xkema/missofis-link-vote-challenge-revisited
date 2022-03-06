import '../css/Notification.css';

function Notification(props) {
  return (
    <div className='Notification'>
      {props.notification.message}
    </div>
  );
}

export default Notification;
