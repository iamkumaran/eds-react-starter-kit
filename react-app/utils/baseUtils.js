// a Mutation Observer
export const onElementAvailable = (selector, callback) => {
  const observer = new MutationObserver(() => {
    const elem = document.querySelector(selector);
    if (elem) {
      observer.disconnect();
      callback(elem);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
};
// React Renderer
export const onRender = (selector, callBack) => {
  const elemList = document.querySelectorAll(selector, callBack);
  // direct render when element present in DOM.
  if (elemList.length) {
    elemList.forEach(elem => callBack(elem));
  } else {
    // if element not exist then use MutationObserver to render component
    onElementAvailable(selector, callBack);
  }
};
