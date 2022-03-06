import { useReducer } from 'react';
import { getNotificationTemplate } from '../utils/getNotificationTemplate';

const useNotifications = () => {
  const [stateX, dispatch] = useReducer((stateX, action) => {
    switch (action.type) {
      case 'notify':
        return {
          ...stateX,
          notifications: [...stateX.notifications, action.notification],
        };
      case 'drop':
        const updatedNotifications = stateX.notifications.filter((notification) => notification.id !== action.notification.id);
        return {
          ...stateX,
          notifications: updatedNotifications
        };
      default:
        throw new Error();
    }
  }, { notifications: [] });

  const notify = (message) => {
    const notification = getNotificationTemplate(message);
    dispatch({
      type: 'notify',
      notification
    });

    const timerId = window.setTimeout(() => {
      dispatch({
        type: 'drop',
        notification
      });
      window.clearTimeout(timerId);
    }, 3000);
  }

  return [stateX, notify];
};

export { useNotifications };
