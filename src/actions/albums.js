import * as request from 'superagent'
import { setAlbums } from '../actions/setAlbums'

export function getAlbums() {
  return function (dispatch) {
    request('https://jsonplaceholder.typicode.com/albums')
      .then(response => {
        dispatch(setAlbums(response.body))
      })
  }
}