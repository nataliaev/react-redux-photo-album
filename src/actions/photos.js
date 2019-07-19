import * as request from 'superagent'
import { setPhotos } from '../actions/setPhotos'

export function getPhotosByAlbum(albumId) {
  return function (dispatch) {
    request
      .get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(res => {
        dispatch(setPhotos(res.body))
      }
    )
  }
}