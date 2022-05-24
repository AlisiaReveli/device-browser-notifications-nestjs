

window.createNotification = async () => {
    // Check if service workers are supported
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {
    scope: '/',
  });
}
// you can generate vapid keys with this command npx web-push generate-vapid-keys [--json]
const publicVapidKey = 'BP6uOQisnVW239lC4X6wRUolY8xyX44S5Eu6miRo3YI5Q4SY5MzCo2HaqhIhvtJQOdlc0M7XyjuVhirQxAiGlEQ';

    
const urlBase64ToUint8Array = (base64String) => {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const getSubscribedElement = () => document.getElementById('subscribed');
const getUnsubscribedElement = () => document.getElementById('unsubscribed');

const setSubscribeMessage = async () => {
  const registration = await navigator.serviceWorker.ready;
  const subscription = await registration.pushManager.getSubscription();
  getSubscribedElement().setAttribute('style', `display: ${subscription ? 'block' : 'none'};`);
  getUnsubscribedElement().setAttribute('style', `display: ${subscription ? 'none' : 'block'};`);
};
window.subscribe = async () => {
  if (!('serviceWorker' in navigator)) return;

  const registration = await navigator.serviceWorker.ready;

  // Subscribe to push notifications
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });

    //subscription are the credentials that needs to be saved in backend to send push notifications
    console.log(subscription);

  if (response.ok) {
    setSubscribeMessage();
  }
};
  await fetch('browser-notification/create', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  });
setSubscribeMessage();
    
};
