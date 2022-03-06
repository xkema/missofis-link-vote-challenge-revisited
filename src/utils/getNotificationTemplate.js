const getNotificationTemplate = (message='') => {
  return {
    message: message,
    id: Math.random().toString(16).substring(2, 10),
    date_created: Date.now()
  }
};

export { getNotificationTemplate };
