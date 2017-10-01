// Libraries
import React from 'react'

// Constants
import { REF_PARAM } from '../constants'

// Strip url from protocol
export const stripProtocolFrom = (url) => {
  return url.replace(/(^\w+:|^)\/\//, '')
}

// Add reference param to url
export const addRefToUrl = (url) => {
  let strippedUrl = url.replace(/\/$/, '')
  return strippedUrl + '/?ref=' + REF_PARAM
}

// Twitter url from handle
export const twitterUrlFromHandle = (handle) => {
  const url = 'https://twitter.com/' + handle
  return addRefToUrl(url)
}

// Loader
export const Loader = () => {
  return (
    <div className='loaderSpinner'>
      <div className='loaderBounce1'></div>
      <div className='loaderBounce2'></div>
      <div className='loaderBounce3'></div>
    </div>
  )
}

// Error message
export const ErrorMessage = () => {
  return (
    <div className='errorMessage'>
      Something went terribly wrong. 🙁 Please try again in a bit.
    </div>
  )
}

// Error message
export const EmptyMessage = () => {
  return (
    <div className='emptyMessage'>
      No results were found. 🙁 Know something that should be here? <a href='/new'>Submit it here!</a>
    </div>
  )
}

// Generate category name
export const categoryName = (category) => {
  if (category === 'TUTORIAL') return 'Tutorial'
  if (category === 'ARTICLE') return 'Article'
  if (category === 'TOOL') return 'Tool'
}

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}