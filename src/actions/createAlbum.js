import { addAlbum } from '../actions/addAlbum'
import * as request from 'superagent'

export const createAlbum = title => dispatch => {
  request
    .post('https://jsonplaceholder.typicode.com/albums')
    .send({ title })
    .then(response => dispatch(addAlbum(response.body.id, response.body.title)))
}