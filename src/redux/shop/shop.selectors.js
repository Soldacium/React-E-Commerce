import { createSelector } from 'reselect';


const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

//for transforming objects into arrays
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
)
