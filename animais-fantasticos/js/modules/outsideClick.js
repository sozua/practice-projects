export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((eventClick) => {
      setTimeout(() => {
        html.addEventListener(eventClick, handleOutsideClick);
      });
    });
    element.setAttribute(outside, "");
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      callback();
      element.removeAttribute(outside);
      events.forEach((eventClick) => {
        html.removeEventListener(eventClick, handleOutsideClick);
      });
    }
  }
}
