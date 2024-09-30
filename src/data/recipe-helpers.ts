import { Recipe } from './data.js';
import { toggleUrlParam } from '../url.js';
import { writeToLocalStorage } from '../local-storage.js';

function toggleRecipe(
  clickedRecipe: Recipe,
  recipes: Recipe[],
  element: HTMLElement
) {
  const newSearchParams = toggleUrlParam(clickedRecipe.id);
  writeToLocalStorage('searchParams', newSearchParams);

  const newRecipes = recipes.map((recipe: Recipe) => {
    if (clickedRecipe.id !== recipe.id) {
      return recipe;
    }

    const copy = { ...recipe };
    copy.selected = !copy.selected;
    return copy;
  });

  element.dispatchEvent(
    new CustomEvent('recipes-changed', {
      detail: newRecipes,
    })
  );
}

function filterByReadyness(
  recipes: Recipe[],
  checkbox: HTMLElement,
  element: HTMLElement
) {
  const newRecipes = recipes.map(item => {
    const copy = { ...item };

    if (item.steps.length > 0 || !checkbox.hasAttribute('selected')) {
      copy.show = true;
    } else {
      copy.show = false;
    }
    return copy;
  });

  toggleUrlParam('ready');

  element.dispatchEvent(
    new CustomEvent('recipes-changed', {
      detail: newRecipes,
    })
  );
}

function filterByTag(
  recipes: Recipe[],
  tagName: string,
  checkbox: HTMLElement,
  element: HTMLElement
) {
  const newRecipes = recipes.map(item => {
    const copy = { ...item };

    if (item.tags.includes(tagName) || !checkbox.hasAttribute('selected')) {
      copy.show = true;
    } else {
      copy.show = false;
    }
    return copy;
  });

  toggleUrlParam(tagName);

  element.dispatchEvent(
    new CustomEvent('recipes-changed', {
      detail: newRecipes,
    })
  );
}

function removeSelections(
  recipes: Recipe[],
  event: Event,
  element: HTMLElement
) {
  event.preventDefault();
  const newRecipes = recipes?.map((recipe: Recipe) => {
    const copy = { ...recipe };
    copy.selected = false;
    return copy;
  });

  element.dispatchEvent(
    new CustomEvent('recipes-changed', {
      detail: newRecipes,
    })
  );

  const newUrl = new URL(window.location.href);
  newUrl.search = '';
  window.history.pushState(null, document.title, newUrl);
}

export { filterByReadyness, filterByTag, removeSelections, toggleRecipe };
