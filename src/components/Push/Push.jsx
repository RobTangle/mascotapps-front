import React, { useState } from "react";
import { NavBtn } from "../Navbar/items";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export default function Push() {
  const { user } = useAuth0();
  const [subscribed, setSubscribed] = useState(false);
  //eslint-disable-next-line
  const publicVapidKey = "YOUR_PUBLIC_VAPID_KEY";
  function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
  //eslint-disable-next-line
  const subscribeUser = async () => {
    //service worker
    let register = await navigator.serviceWorker.register("/worker.js", {
      scope: "/",
    });
    console.log("new service worker registered", register);
    const subscription = await register.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
    });
    console.log("new subscription", subscription);

    //enviando peticion
    let susc = await axios.post("http://localhost:3001/api/subscribe", {
      id: user?.sub,
      subscription,
    });
    console.log("🚀 ~ file: Push.jsx ~ line 11 ~ subscribeUser ~ susc", susc);
  };

  function handleSuscripcion() {
    if (!subscribed) {
      // subscribeUser();
    }
    setSubscribed(!subscribed);
  }
  return subscribed ? (
    <NavBtn icon="unsubscribe" handleClick={handleSuscripcion} />
  ) : (
    <NavBtn icon="subscribe" handleClick={handleSuscripcion} />
  );
}
