/**
 * Everything is stored in the URL.
 * This module takes care of
 * persisting the url into localStorage.
 */

function readFromLocalStorage(key: string): URLSearchParams {
  const searchParamsString = localStorage.getItem(key);

  let searchParams;
  if (searchParamsString !== null) {
    searchParams = new URLSearchParams(searchParamsString);
  } else {
    searchParams = new URLSearchParams();
  }
  return searchParams;
}

function writeToLocalStorage(key: string, searchParams: URLSearchParams) {
  window.localStorage.setItem(key, searchParams.toString());
}

export { readFromLocalStorage, writeToLocalStorage };
