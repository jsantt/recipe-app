const routeChangedEventName = 'route-url-changed';

function getPage(): 'home' | 'recipe' | 'shopping-list' {
  if (window.location.pathname === '/shopping-list') {
    return 'shopping-list';
  }

  if (window.location.pathname !== '/') {
    return 'recipe';
  }

  return 'home';
}

function navigateTo(path: string) {
  const newUrl = new URL(window.location.href);
  newUrl.pathname = path;
  window.history.pushState(null, document.title, newUrl);

  dispatchRouteChanged();
}

function navigateBack() {
  window.history.back();
  dispatchRouteChanged();
}

function toggleModal(modalName: string) {
  const newSearchParams = new URLSearchParams(window.location.search);
  if (newSearchParams.has(modalName)) {
    newSearchParams.delete(modalName);
  } else {
    newSearchParams.append(modalName, '');
  }

  const newUrl = new URL(window.location.href);
  newUrl.search = newSearchParams.toString();
  window.history.pushState(null, document.title, newUrl);

  dispatchRouteChanged();
}

function dispatchRouteChanged() {
  // history.back queues the back event. Thus we wait URL to be updated before dispatching the event (and re-rendering)
  setTimeout(() => {
    window.dispatchEvent(new Event(routeChangedEventName));
  }, 10);
}

export {
  navigateBack,
  navigateTo,
  toggleModal,
  routeChangedEventName,
  getPage,
};
