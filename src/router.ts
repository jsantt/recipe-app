const routeChangedEventName = 'route-url-changed';

function getPage(path: string): 'home' | 'recipe' | 'shopping-list' {
  if (path.includes('/shopping-list')) {
    return 'shopping-list';
  }

  if (
    window.location.pathname === '/' ||
    window.location.pathname === '/recipe-app/'
  ) {
    return 'home';
  }

  return 'recipe';
}

function navigateTo(event: Event, path: string) {
  event.preventDefault();
  const newUrl = new URL(window.location.href);
  newUrl.pathname = path;
  window.history.pushState(null, document.title, newUrl);

  dispatchRouteChanged();
}

function navigateBack() {
  window.history.back();
  dispatchRouteChanged();
}

function toggleModal(modalName: string): void {
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
