function toggleUrlParam(paramName: string): URLSearchParams {
  const newSearchParams = new URLSearchParams(window.location.search);
  if (newSearchParams.has(paramName)) {
    newSearchParams.delete(paramName);
  } else {
    newSearchParams.append(paramName, '');
  }

  const newUrl = new URL(window.location.href);
  newUrl.search = newSearchParams.toString();
  window.history.pushState(null, document.title, newUrl);

  return newSearchParams;
}

function addIntoUrl(searchParams: URLSearchParams): void {
  const newUrl = `${window.location.pathname}?${searchParams.toString()}`;

  window.history.pushState(null, document.title, newUrl);
}

function storeIntoUrl(key: string) {
  const newSearchParams = new URLSearchParams(window.location.search);
  if (newSearchParams.get(key) === null) {
    newSearchParams.append(key, '');
  } else {
    newSearchParams.delete(key);
  }
  return newSearchParams;
}

function hasUrlParam(paramName: string): boolean {
  const newSearchParams = new URLSearchParams(window.location.search);
  return newSearchParams.has(paramName);
}

function parseToArray(commaSeparatedList: string) {
  return commaSeparatedList.split(',');
}

function toCommaSeparatedList(array: Array<string>) {
  return array.join(',');
}

function addToCommaSeparatedList(
  commaSeparatedList: string | null,
  value: string
) {
  if (commaSeparatedList === null) {
    return value;
  }

  const array = parseToArray(commaSeparatedList);

  array.push(value);
  return toCommaSeparatedList(array);
}

function addSelectedRecipeIntoUrl(recipeId: string) {
  const selectedKey = 'S';

  const url = new URLSearchParams(window.location.search);
  const previousValue = url.get(selectedKey);
  addToCommaSeparatedList(previousValue, recipeId);
}

export {
  addIntoUrl,
  addSelectedRecipeIntoUrl,
  hasUrlParam,
  toggleUrlParam,
  storeIntoUrl,
};
