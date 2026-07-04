export const pushToDataLayer = (eventName, eventData = {}) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: eventName,
    ...eventData,
  });
};