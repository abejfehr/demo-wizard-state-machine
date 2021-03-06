import { createSelector } from 'reselect'
import { map, snakeCase } from 'lodash/fp'

import { getSelectedId } from './commission'

export const getAssetState = function(state, props) {
  const { assetName } = props

  if (!assetName) {
    throw new Error('Asset name is required [bffd008a2c9611e9959d10ddb1eacae1]')
  }

  return state.assets[assetName]
}

export const getAssetIds = createSelector(
  [getAssetState],
  function(assetState) {
    return assetState.allIds
  }
)

export const getAssetItems = createSelector(
  [getAssetState],
  function(assetState) {
    const { allIds, byId } = assetState

    return map(function(id) {
      return byId[id]
    }, allIds)
  }
)

export const inferAsset = createSelector(
  [getAssetState, getSelectedId],
  function(assetState, id) {
    return assetState.byId[id]
  }
)

export const inferAssetHandle = createSelector(
  [inferAsset],
  function(asset) {
    return asset ? snakeCase(asset.title) : null
  }
)

export const inferAssetPrice = createSelector(
  [inferAsset],
  function(asset) {
    return asset ? asset.price || 0 : 0
  }
)
