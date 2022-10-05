
self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log(data);
  console.log("Notification Received");
  self.registration.showNotification(data.title, {
    body: data.text,
    icon:
      "https://res.cloudinary.com/dfbxjt69z/image/upload/v1663276317/mascotapps/perrito_apwyz0.png",
  });
});

self.addEventListener('notificationclick', () => {
  console.log("click en la notificacion")
  window.open("https://mascotapps.vercel.app/home")
});