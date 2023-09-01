import { createSelector } from 'reselect';

// Get the categories from the root reducer.
const selectCategoryReducer = (state) => state.categories;

export const selectCategories = createSelector(
  // Input selector.
  // Get the slice of the state that this selector is interested in.
  [selectCategoryReducer],
  // Output selector
  // Get the categories from the category reducer.  
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  // Memoize selectCategories(). If it does not change, it will not run the method.
  [selectCategories],
  // Method.
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);
